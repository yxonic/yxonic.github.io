import { expect, test } from "vitest";
import { Fretboard } from "./fretboard";

test("full fretboard geometry", () => {
  let fb = new Fretboard({
    height: 200,
    width: 3000,
    instrument: "bass4",
  });
  expect(fb.minFret).toBe(0);
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(2990);

  fb = new Fretboard({
    height: 200,
    width: 3000,
    instrument: "bass4",
    nutWidth: 10,
  });
  expect(fb.minFret).toBe(0);
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(20);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(2990);
});

test("partial fretboard geometry", () => {
  let fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "bass4",
    minFret: 3,
    maxFret: 6,
  });
  fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "bass4",
    nutWidth: 10,
    minFret: 3,
    maxFret: 6,
  });
  expect(fb.getFretX(fb.minFret - 1)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);
});

test("even out fret spaces", () => {
  let fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "bass4",
    minFret: 3,
    maxFret: 6,
    evenFactor: 0.5,
  });
  expect(fb.getFretX(fb.minFret - 1)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);

  fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "bass4",
    minFret: 3,
    maxFret: 6,
    evenFactor: 0.8,
  });
  expect(fb.getFretX(fb.minFret - 1)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);

  fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "bass4",
    minFret: 3,
    maxFret: 6,
    evenFactor: 1.0,
  });
  expect(fb.getFretX(fb.minFret - 1)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);
  expect(fb.getFretX(4) - fb.getFretX(3)).toBeCloseTo(
    fb.getFretX(5) - fb.getFretX(4),
  );
});

test("string position", () => {
  let fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "bass4",
  });
  expect(fb.getStringY(1)).toBeCloseTo(10);
  expect(fb.getStringY(4)).toBeCloseTo(190);
  fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "guitar6",
    stringHasWidth: true,
  });
  expect(fb.getStringY(1)).toBeCloseTo(10);
  expect(fb.getStringY(6) + Math.sqrt(46)).toBeCloseTo(190);
});

test("get note position", () => {
  // fretted
  let fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "guitar6",
  });
  expect(fb.getNoteX(3)).toBeCloseTo(62.0649);

  // fretless
  fb = new Fretboard({
    height: 200,
    width: 300,
    instrument: "guitar6",
    fretless: true,
  });
  expect(fb.getNoteX(3)).toBeCloseTo(69.3987);
});
