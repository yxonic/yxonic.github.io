import { expect, test } from "vitest";
import { Fretboard } from "./fretboard";

test("full fretboard geometry", () => {
  let fb = new Fretboard({
    height: 200,
    width: 3000,
    strings: 4,
  });
  expect(fb.minFret).toBe(0);
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(2990);

  fb = new Fretboard({
    height: 200,
    width: 3000,
    strings: 4,
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
    strings: 4,
    minFret: 3,
    maxFret: 6,
  });
  fb = new Fretboard({
    height: 200,
    width: 300,
    strings: 4,
    nutWidth: 10,
    minFret: 3,
    maxFret: 6,
  });
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);
});

test("even out fret spaces", () => {
  let fb = new Fretboard({
    height: 200,
    width: 300,
    strings: 4,
    minFret: 3,
    maxFret: 6,
    evenFactor: 0.5,
  });
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);

  fb = new Fretboard({
    height: 200,
    width: 300,
    strings: 4,
    minFret: 3,
    maxFret: 6,
    evenFactor: 0.8,
  });
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);

  fb = new Fretboard({
    height: 200,
    width: 300,
    strings: 4,
    minFret: 3,
    maxFret: 6,
    evenFactor: 1.0,
  });
  expect(fb.getFretX(fb.minFret)).toBeCloseTo(10);
  expect(fb.getFretX(fb.maxFret)).toBeCloseTo(290);
  expect(fb.getFretX(4) - fb.getFretX(3)).toBeCloseTo(
    fb.getFretX(5) - fb.getFretX(4)
  );
});

test("string position", () => {
  let fb = new Fretboard({
    height: 200,
    width: 300,
    strings: 4,
  });
  expect(fb.getStringY(1)).toBeCloseTo(10);
  expect(fb.getStringY(4)).toBeCloseTo(190);
  fb = new Fretboard({
    height: 200,
    width: 300,
    strings: 6,
    stringGauges: [9, 11, 16, 24, 32, 42, 60, 80],
  });
  expect(fb.getStringY(1)).toBeCloseTo(10);
  expect(fb.getStringY(6) + Math.sqrt(42)).toBeCloseTo(190);
});
