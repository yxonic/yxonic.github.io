import { parseBibFile } from "bibtex";

export function latexToUnicode(text: string) {
  return text.replace("\\", "").replace("--", "–");
}

export interface Publication {
  id: string
  bibtex: string
}

export function useCitation(publications: Publication[]) {
  return publications.map((pub) => {
    const bibtex = parseBibFile(pub.bibtex);
    const entry = bibtex.getEntry(pub.id);
    if (!entry) return pub;
    return {
      ...pub,
      title: entry.getFieldAsString("TITLE"),
      authors: (entry.getField("author") as any).authors$.map(
        (author) => author.firstNames + " " + author.lastNames
      ),
      bookname: latexToUnicode(
        (entry.getFieldAsString("journal") ||
          entry.getFieldAsString("booktitle")) as string
      ),
      pages: latexToUnicode(entry.getFieldAsString("pages") as string),
      year: entry.getFieldAsString("year"),
    };
  });
}
