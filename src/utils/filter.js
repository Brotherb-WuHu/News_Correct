import { dayjs } from 'element-plus'

// 判断是否为空
export const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

// 格式化时间
const filterTime = (time, format = 'YYYY-MM-DD') => {
  if (!isNull(time)) {
    return dayjs(time).format(format)
  }
  return '--'
}

// 设置vue全局过滤器
export default (app) => {
  app.config.globalProperties.$filters = {
    filterTime
  }
}
