<template>
  <article class="fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll py-20">
    <div class="max-w-screen-lg mx-auto">
      <fretboard
        :n-strings="config.moreStrings ? 6 : 4"
        :fretless="config.fretless"
        :even-factor="config.isEven ? 0.8 : 0"
        :marker="config.marker"
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
        <label>
          <input type="checkbox" v-model="config.marker" />
          marker
        </label>
      </div>
    </div>

    <div class="mt-12 mx-4 flex flex-wrap justify-center space-x-12">
      <fretboard
        class="pb-12"
        :real="false"
        :scale-length="3000"
        :height="150"
        :min-fret="0"
        :max-fret="3"
        :n-strings="6"
        :even-factor="0"
      />
      <fretboard
        class="pb-12"
        :real="false"
        :scale-length="3000"
        :height="150"
        :min-fret="2"
        :max-fret="6"
        :n-strings="6"
        :even-factor="1"
      />
      <fretboard
        :real="false"
        :scale-length="3000"
        :height="150"
        :min-fret="0"
        :max-fret="12"
        :n-strings="6"
        :even-factor="1"
        marker
      />
    </div>

    <div class="mt-8">
      <fretboard :min-fret="2" :max-fret="5" :n-strings="4" :even-factor="1" />
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
  marker: true,
});
</script>
