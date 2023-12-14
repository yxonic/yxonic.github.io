import { expect, test } from "vitest";
import { DialogTree } from "./dialogTree";

test("simple dialog history", () => {
  const tree = new DialogTree();

  expect(tree.current.query).toEqual("query");
  expect(tree.current.branches[1]).toBeNull();

  tree.choose(1);
  expect(tree.root.branches[1]).toBe(tree.current);
  expect(tree.current.parent).toBe(tree.root);

  tree.choose(2);

  const history = tree.getHistory();
  expect(history.length).toBe(2);
  expect(history[0].query).toEqual("query");
  expect(history[0].answer).toEqual("1");
  expect(history[1].answer).toEqual("2");
});
