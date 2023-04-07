<template>
  <template v-if="!isFold">
    <el-icon class="Fold" @click="handleFoldClick"><Fold /></el-icon>
  </template>
  <template v-else>
    <el-icon class="Expand" @click="handleFoldClick"><Expand /></el-icon>
  </template>

  <div class="nav-right">
    <avatar />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import avatar from './avatar.vue'

export default defineComponent({
  emits: ['foldChange'],
  components: { avatar },
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return { handleFoldClick, isFold }
  }
})
</script>

<style scoped lang="less">
.Fold {
  font-size: 30px;
  cursor: pointer;
}

.Expand {
  font-size: 30px;
  cursor: pointer;
}
// 位置在最右边
.nav-right {
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
}
</style>
