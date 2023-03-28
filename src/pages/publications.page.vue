<template>
  <a href="/">home</a>
  <h2>Publications</h2>
  <div v-for="cite in citation">
    <h3 class="text-base">{{ cite.year }}</h3>
    <ul class="text-sm -mt-4">
      <li v-for="entry in cite.list">
        <span v-for="(author, i) in entry.authors"
          ><span
            :class="{ 'underline underline-gray-500': author === 'Yu Yin' }"
            >{{ author }}</span
          ><span v-if="entry.marks && i in entry.marks">*</span>, </span
        ><span class="font-bold">{{ entry.title }}</span
        >, {{ entry.bookname
        }}<span v-if="entry.note || entry.specialNote"> (</span
        ><span v-if="entry.note"> {{ entry.note }}</span
        ><span v-if="entry.note && entry.specialNote">, </span
        ><span v-if="entry.specialNote" class="font-semibold">
          {{ entry.specialNote }}</span
        ><span v-if="entry.note || entry.specialNote">)</span>.<span>
          [<a :href="`/pdfs/${entry.id}.pdf`" class="font-semibold">PDF</a
          >]</span
        >
        <span v-if="entry.codeLink">
          [<a
            :href="entry.codeLink"
            class="font-semibold"
            target="_blank"
            rel="noopener"
            >CODE</a
          >]</span
        >
        <span v-if="entry.slidesLink">
          [<a
            :href="entry.slidesLink"
            class="font-semibold"
            target="_blank"
            rel="noopener"
            >SLIDES</a
          >]</span
        >
        [<a
          @click="clipboard(entry.bibtex)"
          class="cursor-pointer font-semibold"
          >CITE</a
        >]
      </li>
    </ul>
  </div>

  <h2>Patents</h2>
  <ul class="text-sm space-y-2">
    <li>
      <b>基于数据挖掘的分子生成方法</b
      >，CN112420131B，刘淇，陈恩红，朱健甫，郝中楷，<b>阴钰</b>，陆承镪，2020.11，<b>已授权</b>。
    </li>
    <li>
      <b>结构化图片自动转换为源代码的方法</b
      >，CN108921911B，陈恩红，刘淇，<b>阴钰</b>，黄振亚，2018.11，<b>已授权</b>。
    </li>
    <li>
      <b>成绩预测方法及装置、存储介质、电子设备</b
      >，CN108171358B，黄振亚，苏喻，<b>阴钰</b>，刘淇，陈恩红，胡国平，2018.06，<b>已授权</b>。
    </li>
    <li>
      <b>一种融合智能教育的编程教学系统及方法</b
      >，CN112596731A，刘淇，陈恩红，马建辉，<b>阴钰</b>，高维博，黄振亚，2020.12，已公开。
    </li>
    <li>
      <b>模型无关的自适应测试方法</b
      >，CN112330509A，陈恩红，刘淇，毕昊阳，黄振亚，<b>阴钰</b>，马海平，2020.11，已公开。
    </li>
    <li>
      <b>针对教育视频的信息预测方法及装置</b
      >，CN111783709A，刘淇，陈恩红，王新，黄威，<b>阴钰</b>，黄振亚，2020.10，已公开。
    </li>
    <li>
      <b>一种融合公式信息的数学题求解方法及系统</b
      >，CN111950701A，陈恩红，黄振亚，刘淇，<b>阴钰</b>，王皓，高维博，吴金泽，2020.7，已公开。
    </li>
    <li>
      <b>一种公司竞争合作策略分析方法及系统</b
      >，CN111626517A，徐童，陈恩红，戴乐，<b>阴钰</b>，秦川，熊辉，2020.5，已公开。
    </li>
    <li>
      <b>知识追踪方法及习题推荐方法</b
      >，CN111538868A，刘淇，陈恩红，童世炜，黄威，黄振亚，<b>阴钰</b>，2020.4，已公开。
    </li>
    <li>
      <b>学生认知诊断方法</b
      >，CN110264091A，刘淇，陈恩红，汪飞，黄振亚，陈玉莹，<b>阴钰</b>，黄仔，2019.6，已公开。
    </li>
  </ul>
</template>

<script setup>
import publications from "../assets/publications.yaml";
import { useCitation } from "../utils/citation";
const citation = useCitation(publications);
async function clipboard(text) {
  await navigator.clipboard.writeText(text);
  alert("BibTeX entry copied to clipboard!");
}
</script>
<script>
export const frontmatter = {
  title: "Publications",
};
</script>
