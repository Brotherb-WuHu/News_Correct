<template>
  <el-row :gutter="28">
    <el-col :span="7">
      <el-input class="el-input-demo" :v-model="searchInput"></el-input>
    </el-col>
    <el-button type="primary" icon="Search">查找</el-button>
    <el-button type="primary" icon="" @click="AddNewWord">
      <el-icon size="medium"><Upload /></el-icon>
      添加</el-button
    >

    <el-table
      ref="multipleTableRef"
      :data="tableData"
      stripe
      style="width: 100%"
      table-layout="auto"
    >
      <!-- 列表循环 -->
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in WhiteOptions"
      >
        <template v-slot="{ row }" v-if="item.prop === 'date'">
          {{ $filters.filterTime(row.date) }}
        </template>

        <template v-slot="{ row }" v-else-if="item.prop === 'state'">
          <el-button
            type="danger"
            size="large"
            round
            :icon="Delete"
            @click="handleDelete(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <Dialog v-model="dialogVisible" />
  </el-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCorrectStore } from '@/store/correct/correct'
import { storeToRefs } from 'pinia'
import { WhiteOptions } from './options.ts'

// 组件
import { Delete } from '@element-plus/icons-vue'
import Dialog from './dialog.vue'

const { WhiteList } = storeToRefs(useCorrectStore())

const multipleTableRef = ref(null)

const tableData = WhiteList.value
const searchInput = ref('')

// 处理删除点击
const handleDelete = (row) => {
  useCorrectStore().deleteWhite(row.whiteWord)
}

// 处理添加点击

// 对话框dialog显示与隐藏控制
const dialogVisible = ref(false)

const AddNewWord = () => {
  dialogVisible.value = true

  // ElMessage({
  //   message: 'Congrats, this is a success message.',
  //   type: 'success'
  // })
}
</script>

<style scoped lang="scss">
el-input-demo {
  padding-bottom: 10px;
}
</style>
