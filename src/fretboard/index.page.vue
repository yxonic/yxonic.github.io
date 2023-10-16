<template>
  <article class="fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll py-20">
    <div class="max-w-screen-lg mx-auto">
      <div class="overflow-x-scroll pb-8">
        <FB
          :fretless="config.fretless"
          :even-factor="config.isEven ? 0.8 : 0"
          :marker="config.marker"
          :instrument="config.moreStrings ? 'guitar' : 'bass'"
          class="shadow-gray-500 shadow-lg"
        />
      </div>
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

    <div class="mt-12 mx-4 flex flex-wrap justify-center items-center">
      <FBDiagram
        class="p-6"
        :height="150"
        :width="200"
        :min-fret="0"
        :max-fret="3"
        :strings="6"
        :even-factor="0"
        :marker="false"
      />
      <FBDiagram
        class="p-6"
        :height="150"
        :width="200"
        :min-fret="1"
        :max-fret="6"
        :strings="4"
        :even-factor="1"
      />
      <FB
        class="p-6"
        :height="150"
        :width="200"
        :scale="1.2"
        :even-factor="1"
        :min-fret="2"
        :max-fret="5"
      />
    </div>
  </article>
</template>

<script setup>
import { reactive } from "vue";
import FB from "./FB.vue";
import FBDiagram from "./FBDiagram.vue";

const config = reactive({
  moreStrings: false,
  fretless: false,
  isEven: false,
  marker: true,
});
</script>
