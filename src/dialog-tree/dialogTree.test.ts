import { expect, test } from "vitest";
import { DialogTree, DialogRound } from "./dialogTree";

class MockGenerator {
  acc: number = 0;

  async generateQuery(context: string, history: DialogRound[] = []) {
    this.acc++;
    return `${this.acc}`;
  }

  async generateAnswer(
    query: string,
    context: string,
    branchInstructions: string[],
    history: DialogRound[] = [],
  ) {
    // TODO
    return branchInstructions.map((_, i) => `${this.acc}-${i}`);
  }
}

test("maintain simple dialog history", async () => {
  const generator = new MockGenerator();
  const tree = await DialogTree.create({
    generator,
    context: "",
    branchInstructions: ["a", "b", "c"],
  });

  expect(tree.current.query).toEqual("1");
  expect(tree.current.branches[2]).toBeNull();

  await tree.choose(2);
  expect(tree.root.branches[2]).toBe(tree.current);
  expect(tree.current.parent).toBe(tree.root);

  await tree.choose(0);

  const history = tree.getHistory();
  expect(history.length).toBe(2);
  expect(history[0].query).toEqual("1");
  expect(history[0].answer).toEqual("1-2");
  expect(history[1].query).toEqual("2");
  expect(history[1].answer).toEqual("2-0");
  expect(tree.current.query).toEqual("3");

  tree.backtrack();
  expect(tree.getHistory().length).toBe(1);
});
