/**
 * @method openUrl
 * @param {String} url 新开窗口的url地址
 */
const openUrl = (url) => {
  window.open(url)
}
/**
 * @method getTime
 * @param {Date} date 转为统一格式的时间戳,未传递时返回当前时间格式
 * @returns {String} yyyy-MM-dd
 */
const getTime = (date) => {
  if (date && !new Date(date)) {
    throw new TypeError('The correct format was not obtained for function "getTime"')
  }
  let nowDate = date ? new Date(date) : new Date()
  const year = nowDate.getFullYear()
  const month = nowDate.getMonth() + 1
  const data = nowDate.getDate()
  return [year, month.toString()[1] ? month : '0' + month, data.toString()[1] ? data : '0' + data].join('-')
}
/**
 * @method getDataType
 * @param {any} data 需要获取数据类型的数据
 * @returns {String} Null|Undefined|String|Number|Array|Object|Function|Boolean|Date|Symbol
 */
const getDataType = (data) => {
  if (data === null) {
    return 'Null'
  } else if (data === undefined) {
    return 'Undefined'
  }
  return Object.prototype.toString.call(data).split(' ')[1].split(']')[0]
}
/**
 * @method cloneData
 * @param {Array,Object,String,Boolean,Number} data 需要克隆的数据
 * @returns {any} 返回的克隆数据
 */
const cloneData = (data) => {
  let type = getDataType(data)
  let newData = null
  if (type === 'Array') {
    newData = []
    data.forEach((item, index) => {
      newData[index] = cloneData(item)
    })
  } else if (type === 'Object') {
    newData = {}
    for (let index in data) {
      let item = data[index]
      newData[index] = cloneData(item)
    }
  } else {
    newData = data
  }
  return newData
}
export default {
  install (Vue) {
    Vue.prototype.$openUrl = openUrl
    Vue.prototype.$getTime = getTime
    Vue.prototype.$getDataType = getDataType
    Vue.prototype.$cloneData = cloneData
  }
}