<template>
  <div>
    <svg
      :height="svgHeight"
      :width="svgWidth"
      :viewBox="'0 0 ' + width + ' ' + height"
      class="select-none"
      @click="onClick"
    >
      <!-- nut -->
      <svg>
        <line
          :x1="fretboard.getFretX(0) - nutWidth / 2 + 4"
          :x2="fretboard.getFretX(0) - nutWidth / 2 + 4"
          :y1="fretboard.getStringY(1) - 2"
          :y2="fretboard.getStringY(strings) + 2"
          stroke="black"
          :stroke-width="nutWidth"
        />
      </svg>

      <!-- frets -->
      <g v-if="!fretless">
        <svg v-for="i in frets" :x="fretboard.getFretX(i)">
          <line
            x1="0"
            x2="0"
            :y1="fretboard.getStringY(1) - 2"
            :y2="fretboard.getStringY(strings) + 2"
            stroke="black"
            :stroke-width="8"
          />
        </svg>
      </g>

      <g v-if="fretNote && minFret > 1">
        <text
          :x="fretboard.getNoteX(minFret)"
          :y="fretboard.getStringY(1) - 30"
          text-anchor="middle"
          style="font-size: 48px; font-style: italic"
        >
          {{ minFret }} fr
        </text>
      </g>

      <!-- markers -->
      <svg v-if="marker && !fretless">
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

      <!-- tags -->
      <g v-for="note in taggedNotes">
        <circle :cx="note.x" :cy="note.y" :r="tagSize + 4" :fill="note.fg" />
        <circle :cx="note.x" :cy="note.y" :r="tagSize" :fill="note.bg" />
        <text
          :x="note.x"
          :y="note.y + 12"
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
  marker?: boolean;
  fretNote?: boolean;
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
  evenFactor: 1.0,
  marker: true,
  fretNote: true,
  fretless: false,
});

// static configs
const padX = 40;
const padY = 80;
const nutWidth = 30;
const markerSize = 20;
const tagSize = 30;

// computed
const strings = computed(() => fretboard.value.strings);
const frets = computed(() => fretboard.value.frets);
const svgHeight = computed(() => props.height);
const svgWidth = computed(() => props.width);
const height = computed(() => (2 * props.height) / props.scale);
const width = computed(() => (2 * props.width) / props.scale);
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
      instrument: props.instrument,
      minFret: props.minFret,
      maxFret: props.maxFret,
      padX,
      padY,
      nutWidth,
      evenFactor: props.evenFactor,
      fretless: props.fretless,
    })
);
const noteManager = shallowRef(
  new NoteManager({
    instrument: props.instrument,
    useFlats: props.useFlats,
    tags: props.tags,
  })
);
watch([() => props.instrument, () => props.useFlats], () => {
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
</script>

<style scoped>
.select-none {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
