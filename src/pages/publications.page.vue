<template>
  <ul class="text-sm">
    <li v-for="(entry, _, i) in bib.entries$">
      {{
        entry
          .getField("author")
          .authors$.map((author) => author.firstNames + " " + author.lastNames)
          .join(", ")
      }}, <span class="italic">{{ entry.getFieldAsString("TITLE") }}</span
      >,
      {{
        latexToUnicode(
          entry.getFieldAsString("journal") ||
            entry.getFieldAsString("booktitle")
        )
      }}<span v-if="metadata[entry._id]?.abbrev">
        ({{ metadata[entry._id].abbrev }})</span
      >, {{ latexToUnicode(entry.getFieldAsString("pages")) }},
      {{ entry.getFieldAsString("year") }}.
      <span v-if="metadata[entry._id]?.codeLink"
        >[<a :href="metadata[entry._id].codeLink" target="_blank" rel="noopener"
          >CODE</a
        >]</span
      >
      <pre class="text-xs">{{ (i, original[i]) }}</pre>
    </li>
  </ul>
</template>
<script setup>
import bibFile from "../assets/publications.bib?raw";
import metadata from "../assets/metadata.json";
import { useBibtex, latexToUnicode } from "../utils/bibtex";
const { bib, original } = useBibtex(bibFile);
</script>
