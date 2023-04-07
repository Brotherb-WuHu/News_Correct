<template>
  <el-container class="correct">
    <el-main class="content">
      <content ref="contentRef" :fileUploadSolve="fileUploadClick" ></content>
    </el-main>
    <el-main class="board">
      <board></board>
    </el-main>

    <el-main class="sideBar">
      <side-bar @clearClick="clearClick" @submitClick="submitClick" ></side-bar>
    </el-main>
  </el-container>
</template>


<script>
import { ref, defineComponent } from 'vue'

import board from './cpns/board/board.vue'
import content from './cpns/content/content.vue'
import sideBar from './cpns/side-bar/side-bar.vue'
import { useCorrectStore } from '@/store/correct/correct'

export default defineComponent({
  name: 'correct',
  components: {
    board,
    content,
    sideBar
  },
  setup(props,{emit}) {
    const contentRef = ref(null)

    const submitClick = () => {
      contentRef.value.handle()
    }

    const clearClick = () => {
      console.log('clearClick');
      contentRef.value.clear()
    }

    const fileUploadClick = () => {
      console.log('fileUploadClick')
      contentRef.value.fileUpload()
    }

    return {
      contentRef,
      submitClick,
      clearClick,
      fileUploadClick
    }
  }
})
</script>

<style scoped lang="less">
.correct {
  height: 100%;
}

.correct {
  // background-color: red;

  .content {
    width: 60%;
    // background-color: aquamarine;
  }

  .board {
    width: 25%;
    // background-color: lightsteelblue;
  }

  .sideBar {
    // background-color: lightgreen;
  }
}
</style>
