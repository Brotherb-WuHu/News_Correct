<template>
<div class="side-bar">
  <el-button type="primary" class="subBtn" @click="submitClick"
    >开始校对</el-button
  >
  <div class="fileUploadBtn">
  <a href="javascript:;" class="fileBtn"><span class="inputText">文档上传</span> <input id="document" ref="fileUp" type="file" :onchange="fileUpload" accept=".docx" /></a>
  </div>

      <div class="fileUploadBtn">
  <a href="javascript:;" class="fileBtn"><span class="inputText">pdf上传</span> <input id="document" ref="PDFUp" type="file" :onchange="PDFUpload" accept=".pdf" /></a>
  </div>


  <el-button type="danger" class="clearBtn" @click="clearClick"
    >清空输入</el-button
  >

  <el-card shadow="always" class="box-card">
    <template #header>
      <div class="card-header">
        <span>所有提示: </span>
        <span>{{ dataLength }}</span>
      </div>
    </template>
  </el-card>


    <div id="container" ref="container" v-show="false"></div>
</div>
</template>

<script>
import { ref,defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useCorrectStore } from '@/store/correct/correct'
import { renderAsync } from 'docx-preview'



export default defineComponent({
  setup(props, { emit }) {
  const correctStoreRefs = storeToRefs(useCorrectStore())
  const { dataLength,contentRef,postContent } = correctStoreRefs

  const container = ref(null)
  const fileUp = ref(null)

  const submitClick = () => {
    emit('submitClick')
  }

  //-----------------------------文件上传-----------------------------
  const fileUpload = () => {
    // emit('fileUploadClick')
    let file = fileUp.value.files[0]
    let options = {className:'docxContent' ,inWrapper: true, ignoreWidth: true, ignoreHeight: true } // https://github.com/VolodymyrBaydalka/docxjs#api

  renderAsync(file, container.value, null, options)
    .then(x => {
      // contentRef 是给页面展示的带有完整 style 的数据
      contentRef.value = container.value.innerHTML
      // postContent 是给后端提交的干净的数据，不带有 style
      postContent.value = document.getElementsByClassName('docxContent')[0].innerText
      // 文件上传的需要单独在这里进行后端提交处理，和直接编辑提交区分开来
      useCorrectStore().GetCorrectRes(postContent.value,contentRef.value)

      // 打印测试
      // console.log(postContent.value)
    }
    );
  }


  const PDFUpload = () => {
    emit('PDFUploadClick')
  }


  const clearClick = () => {
    emit('clearClick')
  }


  return {
    dataLength,
    submitClick,
    clearClick,
    fileUpload,
    PDFUpload,
    container,
    fileUp
  }
}
})
</script>

<style scoped lang='less'>
.side-bar {
margin-top: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.card-header {
display: flex;
justify-content: space-between;
align-items: center;
}

.text {
font-size: 14px;
}

.subBtn {
width: 120px;
height: 60px;
text-align: center;
border-radius: 8px;
font-size: 16px;
padding: 0;
color: #fff;
background: #0a56d6;
box-shadow: var(--el-box-shadow-light);
}
.clearBtn {
position: relative;
right: 0px;
top: 12px;
width: 120px;
height: 60px;
text-align: center;
border-radius: 8px;
font-size: 16px;
padding: 0;
color: #fff;
box-shadow: var(--el-box-shadow-light);
}

.fileUploadBtn {
position: relative;
right: 0px;
top: 6px;
width: 120px;
height: 60px;
margin-bottom: 10px;
text-align: center;
display: flex;
justify-content: center;
  align-items: center;
border-radius: 8px;
font-size: 16px;
padding: 0;
border-radius: 8px;
color: #fff;
box-shadow: var(--el-box-shadow-light);
cursor: pointer;
}

.item {
margin-bottom: 10px;
}

.box-card {
width: 120px;
margin-top: 20px;
}

.fileBtn{
  position: relative;
  display: inline-block;
  width: 120px;
  height: 60px;
  background: #e6a23c;
  // border: 1px solid #99D3F5;
  border-radius: 10px;
  padding: 0px 19px;
  overflow: hidden;
  color: #ffffff;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
  cursor: pointer;
}

.inputText{
  position: relative;
  top: 18px;
  font-size: 17px;
  cursor: pointer;
}

.fileBtn input{
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 8px;
  opacity: 0;
  cursor: pointer;
}

.fileBtn:hover{
  cursor: pointer;
  background-color: #eebe77;
}



</style>
