export class DialogTree {
  context: string;
  branchInstructions: string[];
  root: TreeNode;
  current: TreeNode;

  constructor() {
    // TODO: parameters
    this.context = "";
    this.branchInstructions = ["", "", ""];
    const query = generateQuery(this.context);
    this.root = new TreeNode(
      query,
      generateAnswer(query, this.context, this.branchInstructions)
    );
    this.current = this.root;
  }

  choose(ind: number) {
    // TODO: guard index
    this.current.choice = ind;
    this.current = this.current.branches[ind] ?? this.expand(this.current, ind);
    return this.current;
  }

  backtrack() {
    this.current = this.current.parent ?? this.root;
    this.current.choice = undefined;
  }

  getHistory(node?: TreeNode, ind?: number): Round[] {
    // get current dialog history
    let n = node ?? this.current.parent;
    let i = ind ?? this.current.parentIndex;
    const history: Round[] = [];
    while (n && i) {
      history.push(new Round(n.query, n.answers[i]));
      i = n.parentIndex;
      n = n.parent;
    }
    history.reverse();
    return history;
  }

  expand(node: TreeNode, ind: number) {
    const history = this.getHistory(node, ind);
    const query = generateQuery(this.context, history);
    const newNode = new TreeNode(
      query,
      generateAnswer(query, this.context, this.branchInstructions, history)
    );
    newNode.parent = node;
    newNode.parentIndex = ind;
    node.branches[ind] = newNode;
    return newNode;
  }
}

export class TreeNode {
  query: string;
  answers: string[];

  // tree structure
  parent?: TreeNode;
  parentIndex?: number;
  branches: (TreeNode | null)[];

  // user's choice
  choice?: number;

  constructor(query: string, answers: string[]) {
    this.query = query;
    this.answers = answers;
    this.branches = answers.map((_) => null);
  }
}

export class Round {
  query: string;
  answer: string;
  constructor(query: string, answer: string) {
    this.query = query;
    this.answer = answer;
  }
}

export function generateQuery(context: string, history: Round[] = []) {
  // TODO
  return "";
}

export function generateAnswer(
  query: string,
  context: string,
  branchInstructions: string[],
  history: Round[] = []
) {
  // TODO
  return branchInstructions.map(() => "");
}
