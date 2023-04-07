<template>
  <el-dropdown>
    <span
      class="el-dropdown-link el1"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >
      Dropdown List
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-card shadow="always" class="box-card lack" :style="el1Link">
    <template #header>
      <div class="card-header">
        <span>头部标题</span>
      </div>
    </template>
    <div class="text item">
      <span>详细文字</span>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

let el1Link = ref('')

const mouseover = () => {
  el1Link.value = 'background-color: lightcoral'
  console.log('mouseon')
}

const mouseout = () => {
  el1Link.value = ''
  console.log('mouseout')
}
</script>
<style scoped lang="less">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.box-card {
  width: 300px;
  height: 100px;
  margin-bottom: 15px;
}
.lack {
  border-left: 4px solid lightcoral;
}

.el1:hover {
  background-color: lightpink;
}
</style>
