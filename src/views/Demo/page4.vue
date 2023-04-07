<template>
  <div class="box"></div>
</template>

<script setup lang="ts">
const boxWidth = '100px'
</script>

<style scoped>
.box {
  width: v-bind(boxWidth);
  height: 100px;
  background-color: red;
}
</style>
