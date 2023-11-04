<template>
  <div>
    <svg
      :height="svgHeight"
      :width="svgWidth"
      :viewBox="'0 0 ' + width + ' ' + height"
      @click="onClick"
      @mousemove="(e: any) => onMouseMove(e.offsetX, e.offsetY)"
    >
      <defs>
        <linearGradient id="board" x1="0" y1="100%" x2="0" y2="0">
          <stop offset="0%" stop-color="#100" />
          <stop offset="0.8%" stop-color="#877" />
          <stop offset="1.6%" stop-color="#402028" />
          <stop offset="98.5%" stop-color="#644" />
          <stop offset="99.5%" stop-color="#988" />
          <stop offset="100%" stop-color="#402028" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="5" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>

        <linearGradient id="box-short" x1="0" y1="100%" x2="0" y2="0">
          <stop offset="0%" stop-color="#332" />
          <stop offset="8%" stop-color="#bba" />
          <stop offset="95%" stop-color="#bba" />
          <stop offset="100%" stop-color="#ddc" />
        </linearGradient>

        <linearGradient id="box-long" x1="0" y1="100%" x2="0" y2="0">
          <stop offset="0%" stop-color="#332" />
          <stop offset="3%" stop-color="#bba" />
          <stop offset="98%" stop-color="#bba" />
          <stop offset="100%" stop-color="#ddc" />
        </linearGradient>

        <linearGradient id="fret" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stop-color="#000" />
          <stop offset="50%" stop-color="#ccc" />
          <stop offset="100%" stop-color="#888" />
        </linearGradient>

        <linearGradient id="string" x1="0" y1="100%" x2="0" y2="0">
          <stop offset="0%" stop-color="#000" />
          <stop offset="50%" stop-color="#eee" />
          <stop offset="100%" stop-color="#aaa" />
        </linearGradient>

        <pattern
          v-for="i in fretboard.strings"
          :id="'ring' + i"
          width="3"
          :height="getStringWidth(i)"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="3"
            :height="getStringWidth(i)"
            fill="url(#string)"
            stroke="#333"
          />
        </pattern>
      </defs>

      <!-- fingerboard -->
      <svg x="0">
        <rect :width="width" :height="height" fill="url(#board)" />
      </svg>

      <!-- vertical elements -->
      <svg>
        <!-- markers -->
        <svg v-if="!fretless && marker">
          <g v-for="i in markerIndex">
            <circle
              v-if="i % 12 !== 0"
              :cx="fretboard.getFretSpaceX(i)"
              :cy="height / 2"
              :r="markerSize"
              fill="#ddd"
            />
            <g v-else>
              <circle
                :cx="fretboard.getFretSpaceX(i)"
                :cy="height * 0.25"
                :r="markerSize"
                fill="#ddd"
              />
              <circle
                :cx="fretboard.getFretSpaceX(i)"
                :cy="height * 0.75"
                :r="markerSize"
                fill="#ddd"
              />
            </g>
          </g>
        </svg>

        <!-- side markers -->
        <svg v-if="fretless && marker">
          <g v-for="i in markerIndex">
            <circle
              v-if="i % 12 !== 0"
              :cx="fretboard.getFretX(i)"
              :cy="height - sideMarkerSize - 10"
              :r="sideMarkerSize"
              fill="#ddd"
            />
            <g v-else>
              <circle
                :cx="fretboard.getFretX(i) - sideMarkerSize * 2"
                :cy="height - sideMarkerSize - 10"
                :r="sideMarkerSize"
                fill="#ddd"
              />
              <circle
                :cx="fretboard.getFretX(i) + sideMarkerSize * 2"
                :cy="height - sideMarkerSize - 10"
                :r="sideMarkerSize"
                fill="#ddd"
              />
            </g>
          </g>
        </svg>

        <!-- frets -->
        <svg v-if="!fretless">
          <svg
            v-for="i in 24"
            :width="fretSize"
            :height="height"
            :x="fretboard.getFretX(i) - fretSize / 2"
          >
            <rect :width="fretSize" :height="height" fill="url(#fret)" />
            <path
              fill="#ccc"
              :d="'M0,0 C0,10 ' + fretSize + ',10 ' + fretSize + ',0'"
            />
            <path
              fill="#888"
              :d="
                'M0,' +
                height +
                ' C0,' +
                (height - 10) +
                ' ' +
                fretSize +
                ',' +
                (height - 10) +
                ' ' +
                fretSize +
                ',' +
                height
              "
            />
          </svg>
        </svg>
      </svg>

      <!-- strings -->
      <svg filter="url(#shadow)">
        <svg v-for="i in fretboard.strings" :y="fretboard.getStringY(i)">
          <rect
            :width="width"
            :height="getStringWidth(i)"
            :fill="
              getStringWidth(i) > 5 ? 'url(#ring' + i + ')' : 'url(#string)'
            "
          />
        </svg>
      </svg>

      <!-- nuts -->
      <svg :x="fretboard.offsetX - nutWidth">
        <!-- top -->
        <rect
          y="0"
          :height="padY - 2"
          fill="url(#box-short)"
          :width="nutWidth"
          rx="5"
          ry="5"
        />
        <!-- middle -->
        <rect
          v-for="i in strings - 1"
          :y="fretboard.getStringY(i) + getStringWidth(i) + 4"
          :height="fretboard.stringGap - 8"
          fill="url(#box-long)"
          :width="nutWidth"
          rx="5"
          ry="5"
        />
        <!-- bottom -->
        <rect
          :y="fretboard.getStringY(strings) + getStringWidth(strings) + 4"
          :height="padY - 6"
          fill="url(#box-short)"
          :width="nutWidth"
          rx="5"
          ry="5"
        />
      </svg>

      <!-- tags -->
      <g v-for="note in taggedNotes">
        <circle
          :cx="note.x"
          :cy="note.y + getStringWidth(note.string) / 2"
          :r="tagSize"
          :fill="note.bg"
          filter="url(#shadow)"
        />
        <text
          :x="note.x"
          :y="note.y + getStringWidth(note.string) / 2 + 12"
          text-anchor="middle"
          :fill="note.fg"
          :stroke="note.fg"
          style="font-size: 36px; cursor: default"
        >
          {{ note.tag }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, shallowRef, triggerRef, watch } from "vue";
import { Fretboard, NoteManager, Style } from "./fretboard";

// define props
export interface Props {
  width?: number;
  height?: number;
  scale?: number;
  instrument?: string;
  useFlats?: boolean;
  minFret?: number;
  maxFret?: number;
  evenFactor?: number;
  nutWidth?: number;
  fretSize?: number;
  marker?: boolean;
  fretless?: boolean;
  tags?: { string: number; fret: number; style?: Style }[];
}
const props = withDefaults(defineProps<Props>(), {
  height: 200,
  width: 1500,
  scale: 1,
  instrument: "bass4",
  minFret: 0,
  maxFret: 24,
  evenFactor: 0.0,
  nutWidth: 40,
  fretSize: 10,
  marker: true,
  fretless: false,
});

// static configs
const padX = 40;
const padY = 40;
const markerIndex = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
const markerSize = 20;
const sideMarkerSize = 6;
const tagSize = 35;

// computed
const strings = computed(() => fretboard.value.strings);
const svgHeight = computed(() => props.height);
const svgWidth = computed(() => props.width);
const height = computed(() => 400 / props.scale);
const width = computed(() => (height.value / props.height) * props.width);

// fretboard geometry
const fretboard = computed(
  () =>
    new Fretboard({
      width: width.value,
      height: height.value,
      instrument: props.instrument,
      minFret: props.minFret,
      maxFret: props.maxFret,
      padX,
      padY,
      nutWidth: props.nutWidth,
      evenFactor: props.evenFactor,
      stringHasWidth: true,
      fretless: props.fretless,
    })
);

// note manager
const noteManager = shallowRef(
  new NoteManager({
    instrument: props.instrument,
    useFlats: props.useFlats,
    tags: props.tags,
  })
);
watch(props, () => {
  noteManager.value.setInstrument(props.instrument);
  if (props.useFlats !== undefined) noteManager.value.useFlats = props.useFlats;
  triggerRef(noteManager);
});
const taggedNotes = computed(() =>
  noteManager.value.getAllTags().map((tag) => ({
    ...tag,
    x: fretboard.value.getNoteX(tag.fret),
    y: fretboard.value.getNoteY(tag.string),
  }))
);

function getStringWidth(n: number) {
  let g = fretboard.value.stringGauges![n - 1];
  return Math.sqrt(g);
}

function getNoteFromPos(x: number, y: number) {
  x = (x / svgWidth.value) * width.value;
  y = (y / svgHeight.value) * height.value;
  return fretboard.value.getNoteFromPos(x, y);
}

function onClick(e?: MouseEvent) {
  if (!e?.currentTarget) return;
  // directly use offsetX and offsetY may cause problems in Safari
  // const x = e.offsetX, y = e.offsetY;
  const rect = (e.currentTarget as Element).getBoundingClientRect();
  const x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  const note = getNoteFromPos(x, y);
  if (note === undefined) return;
  noteManager.value.toggleTag(note.string, note.fret);
  triggerRef(noteManager);
}

function onMouseMove(x: number, y: number) {
  // console.log(getNoteFromPos(x, y)?.tag);
}
</script>
