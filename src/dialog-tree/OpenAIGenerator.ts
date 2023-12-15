import OpenAI from "openai";
import { DialogGenerator, DialogRound } from "./dialogTree";

export class OpenAIGenerator implements DialogGenerator {
  openai: OpenAI;

  constructor(public apiKey: string) {
    this.openai = new OpenAI({ apiKey });
  }

  async generateQuery(context: string, history: DialogRound[] = []) {
    const chatCompletion = await this.openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
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
