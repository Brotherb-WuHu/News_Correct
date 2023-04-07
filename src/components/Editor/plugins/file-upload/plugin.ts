const fileUploadPlugin = (editor: any) => {
  editor.ui.registry.addButton('fileUpload', {
    tooltip: 'File Upload',
    icon: 'image',
    onAction: () => {
      console.log('fileUpload')
    }
  })
}

export { fileUploadPlugin }
