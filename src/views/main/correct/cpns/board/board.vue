<template>
  <template v-if="HasGot">
    <template v-for="item in data" :key="item.position">
      <el-card shadow="always" class="box-card words">
        <template #header>
          <div class="card-header">
            <span>{{ item.original }}</span>
          </div>
        </template>
        <div class="text item">
          <span>{{ item.result }}</span>
        </div>
      </el-card>
    </template>
  </template>
</template>



<script >
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCorrectStore } from '@/store/correct/correct'
import CacheMethods from '@/utils/cache'
import { Data } from '@/service/correct/types'

export default defineComponent({
  setup() {
    const correctStore = useCorrectStore()
    let { data, dataLength, HasGot } = storeToRefs(correctStore)

    // console.log(dataLength)

    return {
      HasGot,
      data,
      dataLength
    }
  }
})
</script>

<style scoped lang="less">
.box-card {
  width: 90%;
  // border-left: 4px solid rgb(233, 176, 32);
  margin-bottom: 15px;
}

.words {
  border-left: 4px solid rgb(206, 83, 44);
}

.lack {
  border-left: 4px solid lightcoral;
}

.redund {
  border-left: 4px solid lightseagreen;
}

.blackList {
  border-left: 4px solid lightslategray;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}
</style>
