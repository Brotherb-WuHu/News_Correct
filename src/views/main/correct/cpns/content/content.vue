<template>
<div class="child_content">
  <Editor :init="init"  ref="myEditor" v-model="content" />

  <button @click="print">测试打印</button>
</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { watch, onMounted,onBeforeUnmount, ref, defineComponent } from 'vue'
import tinymce from 'tinymce/tinymce'
import CacheMethods from '@/utils/cache'
import { storeToRefs } from 'pinia'
import { useCorrectStore } from '@/store/correct/correct'

import 'tinymce/tinymce'
import 'tinymce/models/dom'
import 'tinymce/icons/default'
import 'tinymce/themes/silver/theme'

// Skins
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
// import content_style from 'tinymce/skins/content/dark/content.min.css' //将内容存入content_style

// // Plugins 组件根据init中调用情况自行加载
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/wordcount'

// mitt 事件总线
import bus from '@/utils/bus'
//路由
import {useRoute} from 'vue-router'

import { renderAsync } from 'docx-preview'

export default defineComponent({
components: {
  Editor
  },

  setup(props) {
 const route = useRoute()

    // ---------------------------------- FileUpload Solve----------------------------------

    const correctStore = useCorrectStore()

    const correctRefStore = storeToRefs(correctStore)
    const { contentRef,HasGot } = correctRefStore


    watch(contentRef, (newVal, oldVal) => {
      console.log("watch contentRef");
      tinymce.activeEditor.setContent(newVal)
    })

    // ---------------------------------- 用事件总线监听前往编辑按钮点击 ----------------------------------


    // 定义要监听的方法
    const editClick = () => {
      console.log("editClick");
      tinymce.activeEditor.setContent(contentRef.value)
    }

    // 启动监听
    bus.on('editClick', editClick)

    // 在组件卸载之前移除监听
    onBeforeUnmount( () => {
      bus.off('editClick', editClick);
    })


// ---------------------------------- tinymce init ----------------------------------
  const init = {
      plugins: 'autoresize wordcount',
      theme_advanced_buttons3_add: "pastetext,pasteword,selectall",
      min_height: 600,
      min_width: 900,
      language_url: '/static/tinymce/langs/zh-Hans.js',
      language:'zh-Hans',
      skin: false,
      content_css: '',
      content_style: '.errText {   background-color: rgba(206, 83, 44, 0.3);border-bottom: 4px solid rgb(206, 83, 44); }',
      resize: false, //调整宽高 > true 调整高 | false 不可调整宽高 | both 宽高可调
      elementpath: false, //是否展示编辑层级  > p span
      branding: false, // 去水印
      menubar: false, //是否开启顶部菜单 > false 关闭菜单 |  'edit insert view format table tools help' 菜单按照这里排序 | 参考:https://www.tiny.cloud/docs/tinymce/6/menus-configuration-options/
      toolbar: 'undo redo | styles | fontsize |bold italic  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent  ', //工具栏
      font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt', //字体大小
      style_formats_merge: true, //是否开启默认功能
      custom_undo_redo_levels: 50, //回退数量
      image_title: true, //图片是否显示title

  }
  //---------------------------------- tinymce 挂载初始化 ----------------------------------
  onMounted(() => {
    tinymce.init({})
  })

  // ---------------------------------- data ----------------------------------
  let content = ref()
  let contentBody = ''
  let contentAddedTag = ref()
  let myEditor = ref(null)


  const handle = async () => {
    // ---------------------------------- submit ----------------------------------
    contentBody = tinymce.activeEditor.getContent({ format: 'text' })
    contentAddedTag.value = tinymce.activeEditor.getBody().outerHTML

    await correctStore.GetCorrectRes(contentBody, contentAddedTag.value)

        // ---------------------------------- showBorad ----------------------------------
    HasGot.value = true

    // ---------------------------------- handel-add styletag ----------------------------------
    if (contentBody) {
    let data = CacheMethods.getCache('correctData')
    for (let item of data) {
    let reg = new RegExp(item.original)
    contentAddedTag.value = contentAddedTag.value.replace(reg, `<span class="errText">${item.original}</span>`)
    }

    } else {
      console.log('contentBody is empty')
    }

    // ---------------------------------- insert ----------------------------------
    tinymce.activeEditor.setContent(contentAddedTag.value)
  }

  // ---------------------------------- others ----------------------------------
  const clear = () => {
    tinymce.activeEditor.setContent('')
  }
    const print = () => {
      console.log(tinymce.activeEditor.getContent({ format: 'text' }));
  }

  return {
    init,
    content,
    handle,
    clear,
    myEditor,
    print
  }
}
})
</script>

<style scoped lang="less">
.child_content {
  margin: 0;
}
</style>
