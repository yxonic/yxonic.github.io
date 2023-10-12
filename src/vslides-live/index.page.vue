<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 grid grid-cols-2">
    <page-container class="bg-black">
      <end-page />
    </page-container>
    <div>test</div>
  </div>
</template>

<script lang="ts" setup>
import PageContainer from "@vslides/core/components/page/PageContainer.vue";
import EndPage from "@vslides/core/components/page/EndPage.vue";
import "@vslides/core/style/base.css";
</script>
