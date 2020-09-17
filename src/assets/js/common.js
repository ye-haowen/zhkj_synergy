/**
 * 
 * @param {Array} options router配置
 * @param {String} nowRoute 当前路由
 * @param {Array} data breadcrumb数据
 */
export const getBreadcrumbArr = (options = [], nowRoute = {}, data = []) => {
  let path = ''
  nowRoute.matched.forEach(itemR => {
    let flag = options.find(itemF => {
      let str = `${path}/${itemF.path}`
      str = str.replace('//', '/')
      return str === itemR.path
    })
    if (flag) {
      data.push({
        name_CH: flag.name_CH,
        path: itemR.path,
        name: itemR.name
      })
      path = `${path}${flag.path}`
      options = flag.children
    }
  })
  return data
}