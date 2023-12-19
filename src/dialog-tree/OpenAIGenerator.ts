import OpenAI, { ClientOptions } from "openai";
import { DialogGenerator, DialogRound } from "./dialogTree";

function prepareSystemPrompt(context: string, history: DialogRound[] = []) {
  return (
    `Emulate a short conversation between Alice and Bob.

# Context

${context.trim()}
` +
    (history.length > 0
      ? `
# Conversation History
${history.map(
  (h) => "\n\nAlice: " + h.query.trim() + "\n\nBob: " + h.answer.trim(),
)}
`
      : "")
  );
}

export default class OpenAIGenerator implements DialogGenerator {
  openai: OpenAI;

  constructor(clientOptions: ClientOptions) {
    this.openai = new OpenAI(clientOptions);
  }

  async generateQuery(context: string, history: DialogRound[] = []) {
    const chatCompletion = await this.openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: prepareSystemPrompt(context, history),
        },
        {
          role: "user",
          content: "Please continue this conversation.",
        },
      ],
      model: "gpt-4",
      stop: "\n\nBob:",
    });
    return (chatCompletion.choices[0].message.content || "").replace(
      "Alice: ",
      "",
    );
  }

  async generateAnswer(
    query: string,
    context: string,
    branchInstructions: string[],
    history: DialogRound[] = [],
  ) {
    return await Promise.all(
      branchInstructions.map(async (b) => {
        const chatCompletion = await this.openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content: prepareSystemPrompt(
                context,
                history.concat([{ query, answer: "" }]),
              ),
            },
            {
              role: "user",
              content: `Please continue this conversation. ${b}`,
            },
          ],
          model: "gpt-4",
          stop: "\n\nAlice:",
        });
        return (chatCompletion.choices[0].message.content || "").replace(
          "Bob: ",
          "",
        );
      }),
    );
  }
}
