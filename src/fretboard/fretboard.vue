<template>
  <div class="overflow-y-scroll">
    <svg
      class="mx-auto"
      height="200"
      :viewBox="fretboardLeft + ' 0 ' + fretboardLength + ' ' + fretboardWidth"
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

        <filter id="shadow" x="0" y="0" width="200%" height="200%">
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
          v-for="i in strings.length"
          :id="'ring' + i"
          width="3"
          :height="strings[i - 1].h"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="3"
            :height="strings[i - 1].h"
            fill="url(#string)"
            stroke="#333"
          />
        </pattern>
      </defs>

      <!-- fingerboard -->
      <svg :x="fretboardLeft">
        <rect
          :width="fretboardLength"
          :height="fretboardWidth"
          fill="url(#board)"
        />
      </svg>

      <!-- vertical elements -->
      <svg :x="padX" :width="fretboardRight">
        <!-- markers -->
        <svg v-if="!fretless" :x="nutWidth">
          <g v-for="i in markerIndex">
            <circle
              v-if="i % 12 !== 0"
              :cx="(getFretPos(i - 1) + getFretPos(i)) / 2"
              :cy="fretboardWidth / 2"
              :r="markerSize"
              fill="#ddd"
            />
            <g v-else>
              <circle
                :cx="(getFretPos(i - 1) + getFretPos(i)) / 2"
                :cy="fretboardWidth / 4"
                :r="markerSize"
                fill="#ddd"
              />
              <circle
                :cx="(getFretPos(i - 1) + getFretPos(i)) / 2"
                :cy="(fretboardWidth / 4) * 3"
                :r="markerSize"
                fill="#ddd"
              />
            </g>
          </g>
        </svg>

        <!-- side markers -->
        <svg v-if="fretless" :x="nutWidth">
          <g v-for="i in markerIndex">
            <circle
              v-if="i % 12 !== 0"
              :cx="getFretPos(i)"
              :cy="fretboardWidth - sideMarkerSize - 10"
              :r="sideMarkerSize"
              fill="#ddd"
            />
            <g v-else>
              <circle
                :cx="getFretPos(i) - sideMarkerSize * 2"
                :cy="fretboardWidth - sideMarkerSize - 10"
                :r="sideMarkerSize"
                fill="#ddd"
              />
              <circle
                :cx="getFretPos(i) + sideMarkerSize * 2"
                :cy="fretboardWidth - sideMarkerSize - 10"
                :r="sideMarkerSize"
                fill="#ddd"
              />
            </g>
          </g>
        </svg>

        <!-- frets -->
        <svg v-if="!fretless" :x="nutWidth">
          <svg
            v-for="i in 24"
            :width="fretSize"
            :height="fretboardWidth"
            :x="getFretPos(i) - fretSize / 2"
          >
            <rect
              :width="fretSize"
              :height="fretboardWidth"
              fill="url(#fret)"
            />
            <path
              fill="#ccc"
              :d="'M0,0 C0,10 ' + fretSize + ',10 ' + fretSize + ',0'"
            />
            <path
              fill="#888"
              :d="
                'M0,' +
                fretboardWidth +
                ' C0,' +
                (fretboardWidth - 10) +
                ' ' +
                fretSize +
                ',' +
                (fretboardWidth - 10) +
                ' ' +
                fretSize +
                ',' +
                fretboardWidth
              "
            />
          </svg>
        </svg>
      </svg>

      <!-- strings -->
      <svg filter="url(#shadow)" :x="fretboardLeft">
        <svg v-for="(s, i) in strings" :y="s.y">
          <rect
            :width="fretboardLength"
            :height="s.h > 4 ? s.h : s.h - 1"
            :fill="s.h > 4 ? 'url(#ring' + (i + 1) + ')' : 'url(#string)'"
          />
        </svg>
      </svg>

      <!-- nuts -->
      <svg :x="padX">
        <!-- top -->
        <rect
          y="0"
          :height="padY - 4"
          fill="url(#box-short)"
          :width="nutWidth"
          rx="5"
          ry="5"
        />
        <!-- middle -->
        <rect
          v-for="i in strings.length - 1"
          :y="strings[i - 1].y + strings[i - 1].h + 6"
          :height="stringGap - 10"
          fill="url(#box-long)"
          :width="nutWidth"
          rx="5"
          ry="5"
        />
        <!-- bottom -->
        <rect
          :y="lastString.y + lastString.h + 6"
          :height="padY - 6"
          fill="url(#box-short)"
          :width="nutWidth"
          rx="5"
          ry="5"
        />
      </svg>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  nStrings?: number;
  stringGauges?: number[];
  minFret?: number;
  maxFret?: number;
  fretless?: boolean;
  evenFactor?: number;
}
const props = withDefaults(defineProps<Props>(), {
  nStrings: 4,
  minFret: 0,
  maxFret: 24,
  fretless: false,
  evenFactor: 0.0,
});

// configs
const scaleLength = 4000;
const padX = 40;
const padY = 50;
const stringGap = 80;
const nutWidth = 40;
const fretSize = 10;
const markerIndex = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
const markerSize = 20;
const sideMarkerSize = 6;

// computed string position
const strings = computed(() => {
  const gauges =
    props.nStrings === 4 ? [45, 65, 80, 100] : [9, 11, 16, 24, 32, 42, 60, 80];
  const s = [];
  let y = padY;
  for (let i = 0; i < props.nStrings; i++) {
    const h = Math.sqrt(gauges[i]);
    s.push({ y, h });
    y += stringGap + h;
  }
  return s;
});
const lastString = computed(() => {
  return strings.value[strings.value.length - 1];
});

// computed fretboard params
const fretboardRight = computed(() => {
  return getFretPos(props.maxFret) + nutWidth + padX * 2;
});
const fretboardLeft = computed(() => {
  return props.minFret == 0
    ? getFretPos(props.minFret)
    : getFretPos(props.minFret) + nutWidth;
});
const fretboardLength = computed(() => {
  return fretboardRight.value - fretboardLeft.value;
});
const fretboardWidth = computed(() => {
  return lastString.value.y + lastString.value.h + padY;
});

// calculate fret position
function getFretPos(i: number, evenFactor?: number) {
  if (!evenFactor) {
    evenFactor = props.evenFactor;
  }
  if (evenFactor >= 0.95) {
    return ((scaleLength * 0.5) / 12) * i;
  }
  const l = (0.5 * scaleLength) / (1 - 1 / (2 - evenFactor));
  return l - l / (2 - evenFactor) ** (i / 12);
}
</script>
