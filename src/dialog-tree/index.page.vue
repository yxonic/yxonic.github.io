<template>
  <div class="">
    <textarea v-model="clientOptions" />
    <button @click="generate">generate</button>
    <VMark :text="dialog" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";

import OpenAIGenerator from "./OpenAIGenerator";
import VMark from "../components/VMark";

const clientOptions = useStorage("dialogTree.clientOptions", "{}");
const generator = computed(() => {
  let options;
  try {
    options = JSON.parse(clientOptions.value);
  } catch (e) {
    return null;
  }
  if (!options.apiKey) return null;
  return new OpenAIGenerator(options);
});

const dialog = ref("");

async function generate() {
  if (!generator.value) return;
  const s = await generator.value.generateQuery("");
  dialog.value = s;
}
</script>
