<template>
  <article class="fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll py-20">
    <div class="max-w-screen-lg mx-auto">
      <fretboard
        :n-strings="config.moreStrings ? 6 : 4"
        :fretless="config.fretless"
        :even-factor="config.isEven ? 0.8 : 0"
      />
      <div class="mt-8 flex justify-center space-x-4">
        <label>
          <input type="checkbox" v-model="config.moreStrings" />
          more strings
        </label>
        <label>
          <input type="checkbox" v-model="config.fretless" />
          fretless
        </label>
        <label>
          <input type="checkbox" v-model="config.isEven" />
          even fret space
        </label>
      </div>
    </div>
  </article>
</template>

<script setup>
import { reactive } from "vue";
import fretboard from "./fretboard.vue";

const config = reactive({
  moreStrings: false,
  fretless: false,
  isEven: false,
});
</script>
