import { parseBibFile } from "bibtex";
import _latexToUnicode from "latex-to-unicode";

export function latexToUnicode(text) {
  return _latexToUnicode(text).replace("\\", "").replace("--", "–");
}

export function useBibtex(bibFile) {
  const original = bibFile.split("\n\n");
  const bib = parseBibFile(bibFile);
  return { bib, original }
}
