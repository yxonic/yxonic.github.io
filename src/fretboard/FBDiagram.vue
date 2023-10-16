<template>
  <svg
    class="mx-auto"
    :height="height"
    :width="width"
    :viewBox="
      fretboardLeft +
      ' 0 ' +
      (fretboardLength + fretSize) +
      ' ' +
      (fretboardWidth + fretSize)
    "
  >
    <!-- nut -->
    <svg>
      <line
        :x1="nutWidth"
        :x2="nutWidth"
        y1="0"
        :y2="fretboardWidth"
        stroke="black"
        :stroke-width="nutWidth * 2"
      />
    </svg>

    <!-- frets -->
    <svg v-for="i in 24" :x="nutWidth + getFretPos(i)">
      <line
        x1="0"
        x2="0"
        y1="0"
        :y2="fretboardWidth + fretSize"
        stroke="black"
        :stroke-width="fretSize * 2"
      />
    </svg>

    <!-- markers -->
    <svg v-if="marker" :x="nutWidth">
      <g v-for="i in markerIndex">
        <circle
          v-if="i % 12 !== 0"
          :cx="(getFretPos(i - 1) + getFretPos(i)) / 2"
          :cy="(Math.ceil(nStrings / 2) - 0.5) * stringGap"
          :r="markerSize"
        />
        <g v-else>
          <circle
            :cx="(getFretPos(i - 1) + getFretPos(i)) / 2"
            :cy="
              stringGap * 0.5 +
              stringGap * Math.floor(Math.sqrt(nStrings - 1) - 1)
            "
            :r="markerSize"
          />
          <circle
            :cx="(getFretPos(i - 1) + getFretPos(i)) / 2"
            :cy="
              fretboardWidth -
              stringGap * 0.5 -
              stringGap * Math.floor(Math.sqrt(nStrings - 1) - 1)
            "
            :r="markerSize"
          />
        </g>
      </g>
    </svg>

    <!-- strings -->
    <svg :x="fretboardLeft - padX">
      <line
        v-for="s in strings"
        :x1="0"
        :x2="fretboardLength + padX * 2"
        :y1="s.y + fretSize / 2"
        :y2="s.y + fretSize / 2"
        stroke="black"
        :stroke-width="fretSize"
      />
    </svg>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  scaleLength?: number;
  height?: number;
  width?: number;
  real?: boolean;
  nStrings?: number;
  stringGauges?: number[];
  minFret?: number;
  maxFret?: number;
  fretless?: boolean;
  evenFactor?: number;
  nutWidth?: number;
  fretSize?: number;
  stringGap?: number;
  marker?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  scaleLength: 4000,
  height: 200,
  real: true,
  nStrings: 4,
  minFret: 0,
  maxFret: 24,
  fretless: false,
  evenFactor: 0.0,
  stringGap: 80,
  marker: false,
});

// configs
const markerIndex = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
const markerSize = 20;
const sideMarkerSize = 6;

const padX = computed(() => (props.real ? 40 : 0));
const padY = computed(() => (props.real ? 40 : 0));

// computed string position
const nutWidth = computed(() => (props.real ? 40 : 12));
const fretSize = computed(() => (props.real ? 10 : 4));
const strings = computed(() => {
  const gauges =
    props.nStrings === 4 ? [45, 65, 80, 100] : [9, 11, 16, 24, 32, 42, 60, 80];
  const s = [];
  let y = padY.value;
  for (let i = 0; i < props.nStrings; i++) {
    const h = props.real
      ? gauges[i] < 20
        ? Math.sqrt(gauges[i])
        : Math.sqrt(gauges[i]) + 2
      : 0;
    s.push({ y, h });
    y += props.stringGap + h;
  }
  return s;
});
const lastString = computed(() => {
  return strings.value[strings.value.length - 1];
});

// computed fretboard params
const fretboardLeft = computed(() => {
  return props.minFret == 0 ? 0 : getFretPos(props.minFret) + nutWidth.value;
});
const fretboardRight = computed(() => {
  return (
    getFretPos(props.maxFret) +
    nutWidth.value +
    fretSize.value / 2 +
    padX.value * 2
  );
});
const fretboardLength = computed(() => {
  return fretboardRight.value - fretboardLeft.value;
});
const fretboardWidth = computed(() => {
  return lastString.value.y + lastString.value.h + padY.value;
});

// calculate fret position
function getFretPos(i: number, evenFactor?: number) {
  if (!evenFactor) {
    evenFactor = props.evenFactor;
  }
  if (evenFactor >= 0.95) {
    return ((props.scaleLength * 0.5) / 12) * i;
  }
  const l = (0.5 * props.scaleLength) / (1 - 1 / (2 - evenFactor));
  return l - l / (2 - evenFactor) ** (i / 12);
}
</script>
