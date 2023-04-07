<template>
  <el-card>
    <el-row :gutter="28">
      <el-col :span="7">
        <el-menu
          :default-active="activeIndex"
          :router="true"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
        >
          <div class="flex-grow" />
          <el-menu-item index="/main/wbList/WhiteList">白名单词库</el-menu-item>
          <el-menu-item index="/main/wbList/BlackList">黑名单词库</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24"> <router-view /></el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useCorrectStore } from '@/store/correct/correct'

// 首次进入加载全部数据
onMounted(() => {
  useCorrectStore().GetBlackList()
  useCorrectStore().GetWhiteList()
})

// ------------------ 搜索 -----------------------
const searchInput = ref('')

// -----------------  选择黑白名单 -----------------
// 默认打开路径
const activeIndex = ref('/main/wbList/WhiteList')
// ----------------- 搜索更新 -----------------
</script>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 0;
  font-size: 20px;
}

.el-menu-demo {
  border-bottom: none;
  padding-bottom: 10px;
}

.el-input-demo {
  padding-bottom: 10px;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  text-decoration: none;
}
</style>
