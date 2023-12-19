import OpenAI, { ClientOptions } from "openai";
import { DialogGenerator, DialogRound } from "./dialogTree";

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
          content:
            "Emulate a professional conversation about work between Alice and Bob.",
        },
      ],
      model: "gpt-4",
      stop: "\n\nAlice:",
    });
    return chatCompletion.choices[0].message.content || "";
  }

  async generateAnswer(
    query: string,
    context: string,
    branchInstructions: string[],
    history: DialogRound[] = []
  ) {
    // TODO
    return branchInstructions.map((_, i) => `${i}`);
  }
}
