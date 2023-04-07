<template>
  <div class="nav-menu">
    <div class="logo">
      <span v-if="!collapse" class="title">新闻纠错</span>
    </div>

    <el-menu
      :router="true"
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="collapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>主菜单</span>
        </template>

        <el-menu-item index="/main/correct">文本纠错</el-menu-item>
        <el-menu-item index="/main/history">历史记录</el-menu-item>
        <el-menu-item index="/main/wbList">黑白名单</el-menu-item>

        <el-menu-item index="/main/test">测试</el-menu-item>
        <el-menu-item index="/page4">用户中心</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Document,
    IconMenu,
    Location,
    Setting
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
// .nav-menu {
//   height: 100%;
//   background-color: #001529;

//   .logo {
//     display: flex;
//     height: 28px;
//     padding: 12px 10px 8px 10px;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     .img {
//       height: 100%;
//       margin: 0 10px;
//     }
//     .title {
//       font-size: 16px;
//       font-weight: 700;
//       color: white;
//     }
//   }
// }

.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      align-items: center;
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-left: 50px; // 暂时
    }
  }

  .el-menu {
    border-right: none;
  }

  .el-sub-menu {
    background-color: #001529 !important;

    // 二级菜单(默认背景)
    .el-menu-item {
      padding-left: 55px !important;
      color: antiquewhite !important;

      background-color: #0c2135;
    }
  }

  ::v-deep .el-sub-menu__title {
    color: antiquewhite;
    background-color: #001529 !important;
  }

  // hover 高亮

  .el-menu-item:hover {
    color: #fff !important;
    background-color: #3a6fa7 !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

// 目录

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  // height: calc(100% - 48px);
}
</style>
