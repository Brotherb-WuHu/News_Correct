<template>
<div class="history">
  <el-collapse accordion>
<!-----------------------------------------item循环--------------------------------------------------->
  <template v-for="(item,index) in data.title" :key="item">
    <el-collapse-item :name="index + 1">
      <template #title >
      <div class="itemTitleBox">
          <h2  class="itemTitle">{{ item }}</h2>
          <h3 class="itemTitleTime">{{ data.time[index] }}</h3>
      </div>
      </template>
      <div class="itemContent">
        {{ data.content[index] }}

        <el-button type="primary" @click="editClick(data.contentTag[index])" class="itemBtn">进入编辑</el-button>
      </div>

    </el-collapse-item>
    </template>

  </el-collapse>
</div>
</template>

<script setup lang="ts">
import { useCorrectStore } from '@/store/correct/correct'
import { stringLiteral } from '@babel/types';
import { storeToRefs } from 'pinia'
import { useRouter} from 'vue-router'
import bus from '@/utils/bus'

//---------------------------------------路由和事件---------------------------------------------
const router = useRouter()

//---------------------------------------加载历史数据---------------------------------------------
useCorrectStore().GetHistory('Brotherb')
const correctStoreRefs = storeToRefs(useCorrectStore())
const { HistoryArryData, contentRef } = correctStoreRefs



//---------------------------------------标题只取前10个字 + 内容---------------------------------------------


const data = {
  title: [] as string[],
  content: [] as string[],
  contentTag : [] as string[],
  time: [] as string[]
}

for(let item of HistoryArryData.value){
  data.title.push(item.data.content.slice(0, 23) + `......`)
  data.content.push(item.data.content.slice(0, 200) + '......' + item.data.content.slice(-50))
  data.time.push(item.data.time)
  data.contentTag.push(item.data.contentTag)
}

// console.log(data);
//---------------------------------------进入编辑---------------------------------------------
const editClick = (contentTag: string) => {
  router.replace({
    path: '/main/correct',
    query: {
      isClicked: 'true',
      contentTag: contentTag
    }
  })
  contentRef.value = contentTag

  // 事件总线 调用 content.vue 中的方法，加载数据
  bus.emit('editClick')
}


</script>

<style scoped lang="less">

.history{
  width: 70%;
  margin: 0 auto;
}

.itemTitle{
      padding: 5px;
    padding-left: 20px;
}

.itemTitleBox{
     display: flex;
    justify-content: center;
    align-items: center;
}

.itemTitleBox{
  display: flex;
  justify-content: space-between;
}

.itemContent {
      text-align: left;
    font-size: 14px;
    padding: 11px 10px 3px 10px;
    text-indent: 10px;
}

.itemBtn{
    float: right;
    display: block;
    margin: 10px;
}

</style>
