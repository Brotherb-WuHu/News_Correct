<template>
  <el-row :gutter="28">
    <el-col :span="7">
      <el-input class="el-input-demo" :v-model="searchInput"></el-input>
    </el-col>
    <el-button type="primary" icon="Search">查找</el-button>

    <el-table
      ref="multipleTableRef"
      :data="tableData"
      stripe
      style="width: 100%"
      table-layout="auto"
      @selection-change="handleSelectionChange"
    >
      <!-- 列表循环 -->
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in BlackOptions"
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
  </el-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCorrectStore } from '@/store/correct/correct'
import { storeToRefs } from 'pinia'
import { BlackOptions } from './options.ts'
import { Delete } from '@element-plus/icons-vue'

const { BlackList } = storeToRefs(useCorrectStore())

const multipleTableRef = ref(null)

const tableData = BlackList.value

// 处理删除点击
const handleDelete = (row) => {
  useCorrectStore().deleteBlack(row.blackWord)
}

const handleSelectionChange = (val) => {
  console.log(val)
}
</script>
