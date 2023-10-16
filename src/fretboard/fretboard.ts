function assert(value: unknown, message: string) {
  if (!value) {
    throw Error(message);
  }
}

export interface FBConfig {
  // size
  svgHeight: number;
  svgWidth: number;
  // instrument
  strings: number;
  minFret?: number;
  maxFret?: number;
  // display
  padX?: number;
  padY?: number;
  nutWidth?: number;
  stringGauges?: number[];
  evenFactor?: number;
}

export class Fretboard {
  svgHeight: number;
  svgWidth: number;
  scaleLength: number;
  minFret: number;
  maxFret: number;
  offsetX: number;
  stringY: number[];
  evenFactor: number;
  stringGap: number;

  constructor(config: FBConfig) {
    this.svgHeight = config.svgHeight;
    this.svgWidth = config.svgWidth;

    // default values
    this.minFret = config.minFret ?? 0;
    this.maxFret = config.maxFret ?? 24;
    this.evenFactor = config.evenFactor ?? 0;
    const padX = config.padX ?? 10;
    const padY = config.padY ?? 10;
    const nutWidth = config.nutWidth ?? 0;

    assert(this.minFret < this.maxFret, "must contain at least one fret");

    this.offsetX = padX;
    if (this.minFret === 0) this.offsetX += nutWidth;

    this.scaleLength = 1;
    const minFretX = this.getFretX(this.minFret);
    const maxFretX = this.getFretX(this.maxFret);
    let w = this.svgWidth - this.offsetX - padX;
    assert(w > 10, "svg too small");
    this.scaleLength = w / (maxFretX - minFretX);
    this.offsetX -= this.getFretX(this.minFret, 0);

    this.stringY = [];
    let y = padY;
    let stringW = 0;
    if (config.stringGauges) {
      assert(
        config.strings <= config.stringGauges.length,
        "stringGauges must cover all strings"
      );
      stringW = config.stringGauges
        .slice(0, config.strings)
        .map((a) => Math.sqrt(a))
        .reduce((a, b) => a + b);
    }
    this.stringGap =
      (this.svgHeight - 2 * padY - stringW) / (config.strings - 1);
    for (let i = 0; i < config.strings; ++i) {
      this.stringY.push(y);
      if (config.stringGauges) {
        y += Math.sqrt(config.stringGauges[i]);
      }
      y += this.stringGap;
    }
  }

  getFretX(n: number, offset?: number) {
    if (offset === undefined) offset = this.offsetX;
    if (this.evenFactor >= 0.95) {
      return ((this.scaleLength * 0.5) / 12) * n + offset;
    }
    const l = (0.5 * this.scaleLength) / (1 - 1 / (2 - this.evenFactor));
    return l - l / (2 - this.evenFactor) ** (n / 12) + offset;
  }

  getStringY(n: number) {
    return this.stringY[n - 1];
  }

  getFretSpaceX(n: number) {
    return (this.getFretX(n) + this.getFretX(n - 1)) / 2;
  }

  getStringSpaceY(n: number) {
    return this.getStringY(n) + this.stringGap / 2;
  }
}
