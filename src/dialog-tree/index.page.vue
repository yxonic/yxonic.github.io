<template>
  <ClientOnly>
    <div class="p-4 text-gray-700">
      <div class="flex flex-wrap justify-center">
        <div class="max-w-96 p-4">
          <label class="block">
            Context:
            <Textarea class="block w-full" v-model="context" rows="5" />
          </label>

          <label class="block mt-2">
            Branch instructions:
            <Textarea
              class="block w-full"
              v-model="branchInstructions"
              rows="5"
            />
          </label>

          <Button
            class="mt-4 w-full text-sm py-1.5"
            @click="reset"
            label="New Convesation"
            severity="secondary"
            :disabled="loading"
          />

          <label class="block mt-8">
            Client options (specify API key etc. here):
            <Textarea class="block w-full" v-model="clientOptions" rows="5" />
          </label>
        </div>

        <div class="w-128 p-4 py-0">
          <FieldSet legend="Alice">
            <VMark class="-mt-2" :text="query" />
          </FieldSet>

          <FieldSet
            legend="Bob"
            v-for="option in options"
            @click="choose(option)"
          >
            <VMark class="-mt-2" :text="option" />
          </FieldSet>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import FieldSet from "primevue/fieldset";

import ClientOnly from "../components/ClientOnly";
import VMark from "../components/VMark";

import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";

import OpenAIGenerator from "./OpenAIGenerator";
import { DialogRound } from "./dialogTree";

// build client
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

// options for generation
const context = useStorage("dialogTree.context", "");
const branchInstructions = useStorage("dialogTree.branchInstructions", "");

// track the current conversation
const query = ref("");
const options = ref(["", "", ""]);
const history = ref([] as DialogRound[]);
const loading = ref(false);

function reset() {
  history.value = [];
  query.value = "";
  options.value = ["", "", ""];
  generateNextTurn();
}

function choose(ans: string) {
  history.value.push({
    query: query.value,
    answer: ans,
  });
  generateNextTurn();
}

async function generateNextTurn() {
  if (!generator.value) return;
  query.value = "";
  loading.value = true;
  try {
    // generate query
    const q = await generator.value.generateQuery(context.value, history.value);

    // generate options
    query.value = q;
    options.value = ["", "", ""];
    const a = await generator.value.generateAnswer(
      q,
      context.value,
      branchInstructions.value
        ? branchInstructions.value.split("\n\n")
        : ["", "", ""],
      history.value,
    );
    options.value = a;
  } finally {
    loading.value = false;
  }
}
</script>
