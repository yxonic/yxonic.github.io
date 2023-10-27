function assert(value: unknown, message: string) {
  if (!value) {
    throw Error(message);
  }
}

const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"];
const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"];

export class Note {
  name: string;
  pitch: number;
  x: number;
  y: number;
  constructor(name: string, pitch?: number, x?: number, y?: number) {
    this.name = name;
    this.pitch = pitch || 0;
    this.x = x || 0;
    this.y = y || 0;
  }
  transpose(interval: number, useFlats?: boolean) {
    let note = this.name.slice(0, -1);
    let octave = Number(this.name.slice(-1));
    const notes = useFlats ? notesFlat : notesSharp;
    let index = notes.indexOf(note);
    for (let i = 0; i < interval; i++) {
      index = (index + 1) % 12;
      if (index === 0) octave++;
    }
    return notes[index] + String(octave);
  }
}

export interface FBConfig {
  // size
  height: number;
  width: number;
  // instrument
  instrument: string;
  minFret?: number;
  maxFret?: number;
  fretless?: boolean;
  // display
  padX?: number;
  padY?: number;
  nutWidth?: number;
  evenFactor?: number;
  stringHasWidth?: boolean;
}

const standardTuning: Record<string, string[]> = {
  guitar6: ["E2", "A2", "D3", "G3", "B3", "E4"],
  guitar7: ["B1", "E2", "A2", "D3", "G3", "B3", "E4"],
  guitarDropD: ["D2", "A2", "D3", "G3", "B3", "E4"],
  bass4: ["E1", "A1", "D2", "G2"],
  bass5: ["B0", "E1", "A1", "D2", "G2"],
  ukulele: ["C4", "G3", "E3", "A2"],
};

const standardStringGauges: Record<string, number[]> = {
  guitar6: [10, 13, 17, 26, 36, 46],
  guitar7: [10, 13, 17, 26, 36, 46, 59],
  guitarDropD: [10, 13, 17, 26, 36, 46],
  bass4: [45, 65, 80, 100],
  bass5: [45, 65, 80, 100, 130],
  ukulele: [28, 32, 40, 28],
};

export class Fretboard {
  svgHeight: number;
  svgWidth: number;
  scaleLength: number;
  strings: number;
  minFret: number;
  maxFret: number;
  fretless: boolean;
  tuning: string[];
  useFlats: boolean;
  stringGauges?: number[];
  offsetX: number;
  stringY: number[];
  evenFactor: number;
  stringGap: number;

  constructor(config: FBConfig) {
    this.svgHeight = config.height;
    this.svgWidth = config.width;
    this.tuning = standardTuning[config.instrument];
    this.useFlats = this.tuning.filter((t) => t.includes("b")).length > 0;
    this.stringGauges = config.stringHasWidth
      ? standardStringGauges[config.instrument]
      : undefined;
    this.strings = this.tuning.length;
    this.fretless = !!config.fretless;

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
    const stringW = this.stringGauges
      ? this.stringGauges
          .slice(0, this.strings)
          .map((a) => Math.sqrt(a))
          .reduce((a, b) => a + b)
      : 0;
    this.stringGap = (this.svgHeight - 2 * padY - stringW) / (this.strings - 1);
    for (let i = 0; i < this.strings; ++i) {
      this.stringY.push(y);
      if (this.stringGauges) {
        y += Math.sqrt(this.stringGauges[i]);
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

  getNote(string: number, fret: number): Note {
    const openStringNote = this.tuning[this.strings - string];
    const x = this.fretless ? this.getFretX(fret) : this.getFretSpaceX(fret);
    const y = this.getStringY(string);
    const note = new Note(openStringNote).transpose(fret, this.useFlats);
    return new Note(note, 0, x, y);
  }
}
