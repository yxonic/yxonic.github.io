export interface DialogTreeConfig {
  generator: DialogGenerator;
  context: string;
  branchInstructions: string[];
}

export class DialogTree {
  private constructor(
    public context: string,
    public branchInstructions: string[],
    public root: DialogTreeNode,
    public current: DialogTreeNode,
    public generator: DialogGenerator,
  ) {}

  static async create(config: DialogTreeConfig) {
    const generator = config.generator;
    const context = config.context;
    const branchInstructions = config.branchInstructions;
    const query = await generator.generateQuery(context);
    const root = DialogTreeNode.create(
      query,
      await generator.generateAnswer(query, context, branchInstructions),
    );
    return new DialogTree(context, branchInstructions, root, root, generator);
  }

  async choose(ind: number) {
    // TODO: guard index
    this.current.choice = ind;
    this.current =
      this.current.branches[ind] ?? (await this.expand(this.current, ind));
    return this.current;
  }

  backtrack() {
    this.current = this.current.parent ?? this.root;
    this.current.choice = undefined;
  }

  getHistory(node?: DialogTreeNode, ind?: number): DialogRound[] {
    // get current dialog history
    let n = node ?? this.current.parent;
    let i = ind ?? this.current.parentIndex;
    const history: DialogRound[] = [];
    while (n !== undefined && i !== undefined) {
      history.push(new DialogRound(n.query, n.answers[i]));
      i = n.parentIndex;
      n = n.parent;
    }
    history.reverse();
    return history;
  }

  async expand(node: DialogTreeNode, ind: number) {
    const history = this.getHistory(node, ind);
    const query = await this.generator.generateQuery(this.context, history);
    const newNode = DialogTreeNode.create(
      query,
      await this.generator.generateAnswer(
        query,
        this.context,
        this.branchInstructions,
        history,
      ),
    );
    newNode.parent = node;
    newNode.parentIndex = ind;
    node.branches[ind] = newNode;
    return newNode;
  }
}

class DialogTreeNode {
  private constructor(
    public query: string,
    public answers: string[],
    // tree structure
    public parent: DialogTreeNode | undefined,
    public parentIndex: number | undefined,
    public branches: (DialogTreeNode | null)[],
    // user's choice
    public choice: number | undefined,
  ) {}

  static create(query: string, answers: string[]) {
    return new DialogTreeNode(
      query,
      answers,
      undefined,
      undefined,
      answers.map(() => null),
      undefined,
    );
  }
}

export class DialogRound {
  constructor(
    public query: string,
    public answer: string,
  ) {}
}

export interface DialogGenerator {
  generateQuery(context: string, history?: DialogRound[]): Promise<string>;
  generateAnswer(
    query: string,
    context: string,
    branchInstructions: string[],
    history?: DialogRound[],
  ): Promise<string[]>;
}
