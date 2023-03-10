<template>
  <ul class="text-sm">
    <li v-for="entry in citation">
      <span v-for="author in entry.authors"
        ><span :class="{ 'font-bold': author === 'Yu Yin' }">{{ author }}</span
        >, </span
      ><span class="font-bold">{{ entry.title }}</span
      >, {{ entry.bookname
      }}<span v-if="entry.note || entry.specialNote"> (</span
      ><span v-if="entry.note"> {{ entry.note }}</span
      ><span v-if="entry.note && entry.specialNote">, </span
      ><span v-if="entry.specialNote" class="font-bold">
        {{ entry.specialNote }}</span
      ><span v-if="entry.note || entry.specialNote">)</span>.
      <span v-if="entry.codeLink"
        >[<a :href="entry.codeLink" target="_blank" rel="noopener">CODE</a
        >]</span
      >
      <pre class="text-xs">{{ entry.bibtex }}</pre>
    </li>
  </ul>
</template>

<script setup>
import publications from "../assets/publications.yaml";
import { useCitation } from "../utils/citation";
const citation = useCitation(publications);
</script>
