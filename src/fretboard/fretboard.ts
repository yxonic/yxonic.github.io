function assert(value: unknown, message: string) {
  if (!value) {
    throw Error(message);
  }
}

export interface FBConfig {
  // size
  svgHeight: number;
  svgWidth?: number;
  scaleLength?: number;
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

  constructor(config: FBConfig) {
    this.svgHeight = config.svgHeight;

    // default values
    this.minFret = config.minFret ?? 0;
    this.maxFret = config.maxFret ?? 24;
    this.evenFactor = config.evenFactor ?? 0;
    const padX = config.padX ?? 10;
    const padY = config.padY ?? 10;
    const nutWidth = config.nutWidth ?? 0;

    assert(
      (config.svgWidth ?? 0) ^ (config.scaleLength ?? 0),
      "must provide exactly one of svgWidth and scaleLength"
    );
    assert(this.minFret < this.maxFret, "must contain at least one fret");

    this.svgWidth = 0;
    this.scaleLength = 0;
    this.offsetX = padX;
    if (this.minFret === 0) this.offsetX += nutWidth;

    if (config.scaleLength) {
      this.scaleLength = config.scaleLength;
      const minFretX = this.getFretX(this.minFret);
      this.offsetX -= minFretX - this.offsetX;
      this.svgWidth = this.getFretX(this.maxFret) + padX;
    } else if (config.svgWidth) {
      this.svgWidth = config.svgWidth;
      this.scaleLength = 5000;
      const minFretX = this.getFretX(this.minFret);
      const maxFretX = this.getFretX(this.maxFret);
      console.log(minFretX, maxFretX);
      let w = this.svgWidth - this.offsetX - padX;
      assert(w > 10, "svg too small");
      this.scaleLength = (5000 * w) / (maxFretX - minFretX);
      this.offsetX -= this.getFretX(this.minFret) - this.offsetX;
    }

    this.stringY = [];
    let y = padY;
    let dy = (this.svgHeight - 2 * padY) / (config.strings - 1);
    for (let i = 0; i < config.strings; ++i) {
      this.stringY.push(y);
      y += dy;
    }
  }

  getFretX(n: number) {
    if (this.evenFactor >= 0.95) {
      return ((this.scaleLength * 0.5) / 12) * n + this.offsetX;
    }
    const l = (0.5 * this.scaleLength) / (1 - 1 / (2 - this.evenFactor));
    return l - l / (2 - this.evenFactor) ** (n / 12) + this.offsetX;
  }
}
