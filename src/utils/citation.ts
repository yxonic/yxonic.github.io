
import bibtex, * as _bibtex from "bibtex";

export function latexToUnicode(text: string) {
  return text
    .replaceAll("\\", "")
    .replaceAll("--", "–")
    .replaceAll("~", "\u00A0");
}

export interface Publication {
  id: string
  bibtex: string
  note: string
  specialNote?: string
  marks?: number[]
}

export function useCitation(
  allPublications: { year: number; list: Publication[] }[]
) {
  return allPublications.map(({ year, list }) => ({
    year,
    list: list.map((pub) => {
      const bib = (bibtex || _bibtex).parseBibFile(pub.bibtex);
      const entry = bib.getEntry(pub.id);
      if (!entry) return pub;
      return {
        ...pub,
        note: latexToUnicode(pub.note),
        specialNote: latexToUnicode(pub.specialNote || ""),
        title: entry.getFieldAsString("TITLE"),
        authors: (entry.getField("author") as any).authors$.map(
          (author: any) => author.firstNames + " " + author.lastNames
        ),
        bookname: latexToUnicode(
          (entry.getFieldAsString("journal") ||
            entry.getFieldAsString("booktitle")) as string
        ),
        pages: entry.getFieldAsString("pages") && latexToUnicode(entry.getFieldAsString("pages") as string),
        year: entry.getFieldAsString("year"),
      };
    }),
  }));
}
