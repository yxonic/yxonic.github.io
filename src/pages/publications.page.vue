<template>
  <ul class="text-sm">
    <li v-for="entry in citation">
      <span v-for="author in entry.authors"
        ><span
          :class="{ 'underline underline-gray-500': author === 'Yu Yin' }"
          >{{ author }}</span
        >, </span
      ><span class="font-bold">{{ entry.title }}</span
      >, {{ entry.bookname
      }}<span v-if="entry.note || entry.specialNote"> (</span
      ><span v-if="entry.note"> {{ entry.note }}</span
      ><span v-if="entry.note && entry.specialNote">, </span
      ><span v-if="entry.specialNote" class="font-semibold">
        {{ entry.specialNote }}</span
      ><span v-if="entry.note || entry.specialNote">)</span>.<span
        v-if="entry.pdfLink"
      >
        [<a :href="entry.pdfLink" target="_blank" rel="noopener">PDF</a>]</span
      >
      <span v-if="entry.codeLink">
        [<a :href="entry.codeLink" target="_blank" rel="noopener">CODE</a
        >]</span
      >
      <span v-if="entry.slidesLink">
        [<a :href="entry.slidesLink" target="_blank" rel="noopener">SLIDES</a
        >]</span
      >
      [<a @click="clipboard(entry.bibtex)" class="cursor-pointer">CITE</a>]
    </li>
  </ul>
</template>

<script setup>
import publications from "../assets/publications.yaml";
import { useCitation } from "../utils/citation";
const citation = useCitation(publications);
async function clipboard(text) {
  await navigator.clipboard.writeText(text);
  alert("BibTeX entry copied to clipboard!");
}
</script>
<script>
export const frontmatter = {
  title: "Publications @yxonic",
};
</script>
