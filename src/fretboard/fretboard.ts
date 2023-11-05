function assert(value: unknown, message: string) {
  if (!value) {
    throw Error(message);
  }
}

const notesSharp = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const notesFlat = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

export class Note {
  name: string;
  pitch: number;
  constructor(name: string, pitch?: number) {
    this.name = name;
    this.pitch = pitch || 0;
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
    return new Note(notes[index] + String(octave));
  }
}

export class NoteTag {
  string: number;
  fret: number;
  tag: string;
  fg: string;
  bg: string;
  constructor(
    string: number,
    fret: number,
    tag: string,
    fg: string,
    bg: string
  ) {
    this.string = string;
    this.fret = fret;
    this.tag = tag;
    this.fg = fg;
    this.bg = bg;
  }
}

const standardTuning: Record<string, string[]> = {
  guitar6: ["E2", "A2", "D3", "G3", "B3", "E4"],
  guitar7: ["B1", "E2", "A2", "D3", "G3", "B3", "E4"],
  guitarDropD: ["D2", "A2", "D3", "G3", "B3", "E4"],
  bass4: ["E1", "A1", "D2", "G2"],
  bass5: ["B0", "E1", "A1", "D2", "G2"],
  ukulele: ["G4", "C4", "E4", "A4"],
};

const standardStringGauges: Record<string, number[]> = {
  guitar6: [10, 13, 17, 26, 36, 46],
  guitar7: [10, 13, 17, 26, 36, 46, 59],
  guitarDropD: [10, 13, 17, 26, 36, 46],
  bass4: [45, 65, 80, 100],
  bass5: [45, 65, 80, 100, 130],
  ukulele: [14, 16, 20, 14],
};

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
  reverseStrings?: boolean;
  padX?: number;
  padY?: number;
  nutWidth?: number;
  evenFactor?: number;
  stringHasWidth?: boolean;
}
export class Fretboard {
  svgHeight: number;
  svgWidth: number;
  scaleLength: number;
  strings: number;
  minFret: number;
  maxFret: number;
  frets: number[];
  fretless: boolean;
  stringGauges?: number[];
  offsetX: number;
  stringY: number[];
  reverseStrings: boolean = false;
  evenFactor: number;
  stringGap: number;

  constructor(config: FBConfig) {
    this.svgHeight = config.height;
    this.svgWidth = config.width;
    this.stringGauges = config.stringHasWidth
      ? standardStringGauges[config.instrument]
      : undefined;
    this.strings = standardStringGauges[config.instrument].length;
    this.fretless = !!config.fretless;

    // default values
    this.minFret = config.minFret ?? 0;
    this.maxFret = config.maxFret ?? 24;
    this.evenFactor = config.evenFactor ?? 0;
    const padX = config.padX ?? 10;
    const padY = config.padY ?? 10;
    const nutWidth = config.nutWidth ?? 0;

    assert(this.minFret <= this.maxFret, "must contain at least one fret");

    this.offsetX = padX;
    if (this.minFret === 0) this.offsetX += nutWidth;

    this.scaleLength = 1;
    const left = this.minFret > 0 ? this.minFret - 1 : 0;
    const right = this.maxFret;
    this.frets = Array.from({ length: right - left + 1 }, (_, i) => i + left);
    const leftX = this.getFretX(left);
    const rightX = this.getFretX(right);
    let w = this.svgWidth - this.offsetX - padX;
    assert(w > 10, "svg too small");
    this.scaleLength = w / (rightX - leftX);
    this.offsetX -= this.getFretX(left, 0);

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
    if (config.reverseStrings) {
      this.reverseStrings = true;
      this.stringY = this.stringY.reverse();
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

  getFretSpaceX(n: number) {
    return (this.getFretX(n) + this.getFretX(n - 1) + 4) / 2;
  }

  getNoteX(fret: number) {
    return this.fretless || fret === 0
      ? this.getFretX(fret)
      : this.getFretSpaceX(fret);
  }

  getStringY(n: number) {
    return this.stringY[n - 1];
  }

  getStringSpaceY(n: number) {
    return (
      this.getStringY(n) +
      (this.stringGauges ? Math.sqrt(this.stringGauges[n - 1]) : 0) +
      this.stringGap / 2
    );
  }

  getNoteY(string: number) {
    return (
      this.stringY[string - 1] +
      (this.stringGauges ? Math.sqrt(this.stringGauges[string - 1]) / 2 : 0)
    );
  }

  getNoteFromPos(x: number, y: number) {
    let l = this.frets[0] - 1,
      r = this.frets[this.frets.length - 1] + 1;
    while (l < r - 1) {
      let m = Math.floor((l + r) / 2);
      if (this.fretless ? this.getFretSpaceX(m + 1) > x : this.getFretX(m) > x)
        r = m;
      else l = m;
    }
    const fret = r;
    if (fret < this.minFret || fret > this.maxFret) {
      return;
    }

    l = 0;
    r = this.strings + 1;
    while (l < r - 1) {
      let m = Math.floor((l + r) / 2);
      if (
        this.reverseStrings
          ? this.getStringSpaceY(m) < y
          : this.getStringSpaceY(m) > y
      )
        r = m;
      else l = m;
    }
    const string = this.reverseStrings ? l : r;
    if (string < 1 || string > this.strings) {
      return;
    }

    return { string, fret };
  }
}

export type Style = "default" | "highlight" | "inactive" | "selected";
export interface NoteManagerConfig {
  instrument: string;
  useFlats?: boolean;
  colorMap?: Record<Style, { fg: string; bg: string }>;
  tags?: { string: number; fret: number; style?: Style }[];
}
export class NoteManager {
  tuning: string[] = [];
  useFlats: boolean = false;
  tags: Record<string, { string: number; fret: number; style?: Style }> = {};
  colorMap: Record<Style, { fg: string; bg: string }>;

  constructor(config: NoteManagerConfig) {
    this.setInstrument(config.instrument);
    this.setTags(config.tags);
    if (config.useFlats !== undefined) this.useFlats = config.useFlats;
    this.colorMap = config.colorMap ?? {
      default: { fg: "black", bg: "white" },
      highlight: { fg: "white", bg: "black" },
      inactive: { fg: "black", bg: "#999999" },
      selected: { fg: "white", bg: "#dd0000" },
    };
  }

  setInstrument(instrument: string) {
    this.tuning = standardTuning[instrument];
    this.useFlats = this.tuning.filter((t) => t.includes("b")).length > 0;
  }

  setTags(tags?: { string: number; fret: number; style?: Style }[]) {
    this.tags = Object.fromEntries(
      (tags ?? []).map((tag) => [[tag.string, tag.fret], tag])
    );
  }

  getNoteTag(string: number, fret: number, style: Style = "default") {
    const openStringNote = this.tuning[this.tuning.length - string];
    const note = new Note(openStringNote).transpose(fret, this.useFlats);
    const tag = note.name.slice(0, -1);
    const { fg, bg } = this.colorMap[style];
    return new NoteTag(string, fret, tag, fg, bg);
  }

  getAllTags() {
    return Object.values(this.tags)
      .filter(({ string }) => string <= this.tuning.length)
      .map((tag) => this.getNoteTag(tag.string, tag.fret, tag.style));
  }

  setTag(string: number, fret: number, style: Style = "default") {
    this.tags[String([string, fret])] = { string, fret, style };
  }
  removeTag(string: number, fret: number) {
    delete this.tags[String([string, fret])];
  }
  toggleTag(string: number, fret: number) {
    const tag = this.tags[String([string, fret])];
    if (tag === undefined) {
      this.setTag(string, fret, "default");
    } else if (tag.style === undefined || tag.style === "default") {
      tag.style = "highlight";
    } else {
      this.removeTag(string, fret);
    }
  }
}
