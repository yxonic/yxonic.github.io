<template>
  <svg
    :height="svgHeight"
    :width="svgWidth"
    :viewBox="'0 0 ' + width + ' ' + height"
  >
    <!-- nut -->
    <svg>
      <line
        :x1="fretboard.getFretX(0) - nutWidth"
        :x2="fretboard.getFretX(0) - nutWidth"
        :y1="fretboard.getStringY(1) - 2"
        :y2="fretboard.getStringY(strings) + 2"
        stroke="black"
        :stroke-width="nutWidth * 2"
      />
    </svg>

    <!-- frets -->
    <g v-if="!fretless">
      <svg v-for="i in maxFret - minFret" :x="fretboard.getFretX(i + minFret)">
        <line
          x1="0"
          x2="0"
          :y1="fretboard.getStringY(1)"
          :y2="fretboard.getStringY(strings)"
          stroke="black"
          :stroke-width="8"
        />
      </svg>
    </g>

    <!-- markers -->
    <svg v-if="marker">
      <g v-for="i in markerIndex">
        <circle
          v-if="i % 12 !== 0"
          :cx="fretboard.getFretSpaceX(i)"
          :cy="fretboard.getStringSpaceY(Math.ceil(strings / 2))"
          :r="markerSize"
        />
        <g v-else>
          <circle
            :cx="fretboard.getFretSpaceX(i)"
            :cy="
              fretboard.getStringSpaceY(Math.ceil(Math.sqrt(strings - 1) - 1))
            "
            :r="markerSize"
          />
          <circle
            :cx="fretboard.getFretSpaceX(i)"
            :cy="
              fretboard.getStringSpaceY(
                strings - Math.ceil(Math.sqrt(strings - 1) - 1)
              )
            "
            :r="markerSize"
          />
        </g>
      </g>
    </svg>

    <!-- strings -->
    <svg>
      <line
        v-for="i in strings"
        :x1="fretboard.getFretX(0)"
        :x2="fretboard.getFretX(25)"
        :y1="fretboard.getStringY(i)"
        :y2="fretboard.getStringY(i)"
        stroke="black"
        :stroke-width="4"
      />
    </svg>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Fretboard } from "./fretboard";

// define props
export interface Props {
  width?: number;
  height?: number;
  scale?: number;
  strings?: number;
  minFret?: number;
  maxFret?: number;
  evenFactor?: number;
  marker?: boolean;
  fretless?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  height: 200,
  width: 1500,
  scale: 1,
  strings: 4,
  minFret: 0,
  maxFret: 24,
  evenFactor: 0.0,
  marker: true,
  fretless: false,
});

// static configs
const nutWidth = 15;
const padX = 40;
const padY = 40;
const markerSize = 20;

// computed
const svgHeight = computed(() => props.height);
const svgWidth = computed(() => props.width);
const height = computed(() => 400 / props.scale);
const width = computed(() => (height.value / props.height) * props.width);
const markerIndex = computed(() =>
  [3, 5, 7, 9, 12, 15, 17, 19, 21, 24].filter(
    (i) => i >= props.minFret && i <= props.maxFret
  )
);

// fretboard
const fretboard = computed(
  () =>
    new Fretboard({
      width: width.value,
      height: height.value,
      strings: props.strings,
      minFret: props.minFret,
      maxFret: props.maxFret,
      padX,
      padY,
      nutWidth,
      evenFactor: props.evenFactor,
    })
);
</script>
