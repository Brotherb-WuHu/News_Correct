<template>
  <div>
    <el-dropdown class="el-dropdown">
      <span class="el-dropdown-link">
        <el-avatar :size="50" shape="square" :src="circleUrl" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="username">Brother_b</el-dropdown-item>
          <el-dropdown-item @click="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import localCache from '@/utils/cache'

const circleUrl = ref(
  'https://ts1.cn.mm.bing.net/th/id/R-C.f955f1d16289a0dc3f2a56a0c0082d4c?rik=sr0JJAlANUigiQ&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2f2d3e6604d8acd1d4c85d8f757bfd69e7dad79348.jpg&ehk=h2ifXe%2b0n9XU71ZoPhBgQjLLowawnDhv63Qu9ie6hSM%3d&risl=&pid=ImgRaw&r=0'
)

const logout = () => {
  // localCache.deleteCache('name')
  window.location.href = '/login'
}
</script>

<style scoped lang="less">
.username::hover {
  cursor: default;
}
</style>
