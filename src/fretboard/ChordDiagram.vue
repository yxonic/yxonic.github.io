<template>
  <svg
    :height="svgHeight"
    :width="svgWidth"
    :viewBox="'0 0 ' + width + ' ' + (height + 4)"
  >
    <!-- nut -->
    <svg>
      <line
        :y1="fretboard.getFretX(0) - nutWidth / 2 + 4"
        :y2="fretboard.getFretX(0) - nutWidth / 2 + 4"
        :x1="fretboard.getStringY(1) + 2"
        :x2="fretboard.getStringY(strings) - 2"
        stroke="black"
        :stroke-width="nutWidth"
      />
    </svg>

    <!-- frets -->
    <g v-if="!fretless">
      <svg v-for="i in frets" :y="fretboard.getFretX(i)">
        <line
          y1="0"
          y2="0"
          :x1="fretboard.getStringY(1) + 2"
          :x2="fretboard.getStringY(strings) - 2"
          stroke="black"
          :stroke-width="8"
        />
      </svg>
    </g>

    <g v-if="fretNote && minFret > 1">
      <text
        :y="fretboard.getFretX(minFret - 1) + 40"
        :x="fretboard.getStringY(strings) + 20"
        style="font-size: 42px; font-style: italic"
      >
        {{ minFret }} fr
      </text>
    </g>

    <!-- markers -->
    <svg v-if="marker">
      <g v-for="i in markerIndex">
        <circle
          v-if="i % 12 !== 0"
          :cy="fretboard.getFretSpaceX(i)"
          :cx="fretboard.getStringSpaceY(Math.ceil(strings / 2))"
          :r="markerSize"
        />
        <g v-else>
          <circle
            :cy="fretboard.getFretSpaceX(i)"
            :cx="
              fretboard.getStringSpaceY(Math.ceil(Math.sqrt(strings - 1) - 1))
            "
            :r="markerSize"
          />
          <circle
            :cy="fretboard.getFretSpaceX(i)"
            :cx="
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
        :y1="fretboard.getFretX(0)"
        :y2="fretboard.getFretX(25)"
        :x1="fretboard.getStringY(i)"
        :x2="fretboard.getStringY(i)"
        stroke="black"
        :stroke-width="4"
      />
    </svg>

    <!-- tags -->
    <g v-for="note in taggedNotes">
      <circle :cx="note.y" :cy="note.x" :r="tagSize + 4" :fill="note.tag.fg" />
      <circle :cx="note.y" :cy="note.x" :r="tagSize" :fill="note.tag.bg" />
      <text
        :y="note.x + 12"
        :x="note.y"
        text-anchor="middle"
        :fill="note.tag.fg"
        :stroke="note.tag.fg"
        style="font-size: 36px"
      >
        {{ note.tag.tag }}
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Fretboard, Style } from "./fretboard";

// define props
export interface Props {
  width?: number;
  height?: number;
  scale?: number;
  instrument?: string;
  minFret?: number;
  maxFret?: number;
  evenFactor?: number;
  marker?: boolean;
  fretNote?: boolean;
  fretless?: boolean;
  tags?: { string: number; fret: number; tag?: string; style?: Style }[];
}
const props = withDefaults(defineProps<Props>(), {
  height: 200,
  width: 1500,
  scale: 1,
  instrument: "bass4",
  minFret: 0,
  maxFret: 24,
  evenFactor: 1.0,
  marker: true,
  fretNote: true,
  fretless: false,
});

// static configs
const padX = 0;
const padY = 80;
const nutWidth = 30;
const markerSize = 20;
const tagSize = 30;

// computed
const strings = computed(() => fretboard.value.strings);
const frets = computed(() => fretboard.value.frets);
const svgHeight = computed(() => props.height);
const svgWidth = computed(() => props.width);
const height = computed(() => 400 / props.scale);
const width = computed(() => (height.value / props.height) * props.width);
const markerIndex = computed(() =>
  [3, 5, 7, 9, 12, 15, 17, 19, 21, 24].filter(
    (i) => i >= props.minFret && i <= props.maxFret
  )
);
const taggedNotes = computed(() =>
  (props.tags ?? []).map((tag) =>
    fretboard.value.getNote(tag.string, tag.fret, tag.tag, tag.style)
  )
);

// fretboard
const fretboard = computed(
  () =>
    new Fretboard({
      width: height.value,
      height: width.value,
      instrument: props.instrument,
      minFret: props.minFret,
      maxFret: props.maxFret,
      padX,
      padY,
      nutWidth,
      evenFactor: props.evenFactor,
      fretless: props.fretless,
      reverseStrings: true,
    })
);
</script>
