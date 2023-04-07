<template>
  <el-dialog
    :model-value="dialogVisible"
    title="添加白名单"
    width="40%"
    @close="handleClose"
  >
    <!-- 表单开始 -->
    <el-form :model="form" :inline="true">
      <template v-for="(item, index) in form.data" :key="index">
        <el-form-item
          label="字词"
          prop="word"
          :rules="[{ required: true, message: '请输入', trigger: 'blur' }]"
        >
          <!-- 字词输入框 -->
          <el-input v-model="item.word"></el-input>
        </el-form-item>
        <h3>测试 {{ item.word }}</h3>
        <!-- 时间 -->

        <el-form-item label="时间" prop="time">
          <div class="demo-date-picker">
            <el-date-picker
              v-model="item.date"
              readonly
              type="date"
              format="YYYY-MM-DD"
              value-format="x"
            >
              <template #default="cell">
                <div class="cell" :class="{ current: cell.isCurrent }">
                  <span class="text">{{ cell.text }}</span>
                </div>
              </template>
            </el-date-picker>
          </div>
        </el-form-item>
        <!-- 删除选定行 -->
        <el-form-item>
          <el-button type="danger" @click="form.data.splice(index, 1)"
            >删除</el-button
          >
        </el-form-item>
      </template>
    </el-form>

    <!-- 表单完 -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        <el-button @click="addDomain">New domain</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits } from 'vue'
import { addWhiteList } from '@/service/correct/correct'

const dialogVisible = ref(false)
const emits = defineEmits(['update:modelValue'])

// 表单处理

// const form = ref([{ word: '你好', date: new Date().getTime() }])

const form = reactive<Iform>({
  data: [{ word: '', date: new Date().getTime() }],
  name: '蔡哥'
})
interface Idata {
  word: string
  date: number
}
interface Iform {
  data: Idata[]
  name: string
}

// const value = ref(new Date().getTime())

// 后端接口格式
// {
//   name: "蔡哥",
//     data: [
//     {
//      "blackList": '',
//     "time":12323
//   },{
//   、、、
// }
//   ]
// }
// 窗口关闭发送
const handleClose = () => {
  emits('update:modelValue', false)
}

// 添加新词
const addDomain = () => {
  form.data.push({
    word: '',
    date: new Date().getTime()
  })
}

// 白名单添加请求
const AddWhite = async (form: Iform) => {
  let requestFrom = {
    name: '蔡哥',
    data: form
  }

  await addWhiteList(form)
}

// 确认按钮点击

const handleConfirm = () => {
  handleClose()
  AddWhite(form)
}
</script>

<style lang="scss" scoped></style>
