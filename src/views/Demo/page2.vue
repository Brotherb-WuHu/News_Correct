<template>
  <div>
    <Editor :init="init" />
  </div>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce'
import { onMounted } from '@vue/runtime-core'
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

// 关闭skin，调用路径设置为空
const init = {
  skin: false,
  // skin_url: '', // 因为skin已经为false，所以此参数设不设都无所谓了
  content_css: ''
  //将导入的css内容送给content_style参数使用
}
onMounted(() => {
  console.dir(tinymce)
  tinymce.init({})
})
</script>
