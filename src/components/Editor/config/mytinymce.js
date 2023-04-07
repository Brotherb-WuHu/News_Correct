import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce'
import CacheMethods from '@/utils/cache'
import { storeToRefs } from 'pinia'
import { useCorrectStore } from '@/store/correct/correct'

// import 'tinymce/tinymce'
// import 'tinymce/models/dom'
// import 'tinymce/icons/default'
// import 'tinymce/themes/silver/theme'

// // Skins
// import 'tinymce/skins/ui/oxide/skin.min.css'
// import 'tinymce/skins/ui/oxide/content.min.css'
// import content_style from 'tinymce/skins/content/dark/content.min.css' //将内容存入content_style

// // Plugins 组件根据init中调用情况自行加载
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/image'
// import 'tinymce/plugins/file-manager'

import { fileUploadPlugin } from '../plugins/file-upload/plugin'

const tinymceConfig = {
  plugins: 'image autoresize wordcount paste',
  theme_advanced_buttons3_add: 'pastetext,pasteword,selectall',
  // plugins: 'advlist autolink lists link image charmap print preview anchor,searchreplace visualblocks code fullscreen,insertdatetime media table paste help wordcount image',
  min_height: 600,
  language_url: '/static/tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
  content_css: ' ',
  content_style:
    '.errText {   background-color: rgba(206, 83, 44, 0.3);border-bottom: 4px solid rgb(206, 83, 44); }',
  //将导入的css内容送给content_style参数使用  content_css: 'default', //主题tinymce-5-dark || tinymce-5 || default || writer || document || dark
  // language: 'zh_CN', //中文
  resize: false, //调整宽高 > true 调整高 | false 不可调整宽高 | both 宽高可调
  elementpath: false, //是否展示编辑层级  > p span
  branding: true, // 去水印
  menubar: false, //是否开启顶部菜单 > false 关闭菜单 |  'edit insert view format table tools help' 菜单按照这里排序 | 参考:https://www.tiny.cloud/docs/tinymce/6/menus-configuration-options/
  toolbar:
    'undo redo | styles | bold italic  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent  | image | insertfile', //工具栏
  style_formats_merge: true, //是否开启默认功能
  custom_undo_redo_levels: 50, //回退数量
  image_title: true, //图片是否显示title

  file_picker_types: 'file image', //文件选择器类型
  automatic_uploads: true //自动上传

  // setup: () => {
  //   window.tinymce.PluginManager.add('fileUpload', fileUploadPlugin)
  // }
}

export default { tinymceConfig }
