<template>
  <article class="fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll py-20">
    <div class="max-w-screen-lg mx-auto">
      <div class="overflow-x-scroll pb-8">
        <FB
          :fretless="config.fretless"
          :even-factor="config.isEven ? 0.8 : 0"
          :marker="config.marker"
          :instrument="config.moreStrings ? 'guitar6' : 'bass4'"
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
      <ChordDiagram
        class="p-10"
        :height="120"
        :width="200"
        :scale="1.5"
        :max-fret="3"
        instrument="guitar6"
        :marker="false"
        :tags="[
          { string: 5, fret: 3, style: 'highlight' },
          { string: 4, fret: 2, style: 'default' },
          { string: 3, fret: 0, style: 'default' },
          { string: 2, fret: 1, style: 'highlight' },
          { string: 1, fret: 0, style: 'default' },
        ]"
      />
      <FBDiagram
        class="p-10"
        :height="180"
        :width="300"
        :scale="0.8"
        :min-fret="5"
        :max-fret="12"
        instrument="guitar6"
        :fretless="config.fretless"
        :marker="config.marker"
        :tags="[
          { string: 6, fret: 5, style: 'highlight' },
          { string: 6, fret: 8 },
          { string: 5, fret: 7 },
          { string: 4, fret: 5 },
          { string: 4, fret: 7, style: 'highlight' },
          { string: 4, fret: 10 },
          { string: 3, fret: 9 },
          { string: 3, fret: 12 },
          { string: 2, fret: 10, style: 'highlight' },
          { string: 1, fret: 8 },
          { string: 1, fret: 12 },
        ]"
      />
      <FB
        class="p-10"
        :height="150"
        :width="200"
        :scale="1.2"
        :min-fret="3"
        :max-fret="5"
        :fretless="config.fretless"
        :marker="config.marker"
        :tags="[
          { string: 4, fret: 3 },
          { string: 3, fret: 5, style: 'highlight' },
          { string: 2, fret: 5 },
        ]"
      />
    </div>
  </article>
</template>

<script setup>
import { reactive } from "vue";
import FB from "./FB.vue";
import FBDiagram from "./FBDiagram.vue";
import ChordDiagram from "./ChordDiagram.vue";

const config = reactive({
  moreStrings: false,
  fretless: false,
  isEven: false,
  marker: true,
});
</script>

<script>
export const frontmatter = {
  title: "Fretboard Demo",
};
</script>
