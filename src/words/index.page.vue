<template>
  <Card>
    <template #title>猫</template>
    <template #content>
      <Accordion>
        <AccordionTab v-for="tab in tabs" :key="tab.word" :header="tab.word">
          <p class="m-0">{{ tab.definition }}</p>
        </AccordionTab>
      </Accordion>
    </template>
  </Card>
</template>

<script setup>
import Card from "primevue/card";
import Accordion from "primevue/accordion";
import AccordionTab from 'primevue/accordiontab';

const tabs = [
  {word: 'cat', definition: '猫'},
  {word: 'shark', definition: '鲨鱼'},
  {word: 'elephant', definition: '大象'},
]
</script>
