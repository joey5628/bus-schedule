/**
 * @author  zhangyi5628
 * @fileoverView 处理请求的基类
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.http.options.xhr = { withCredentials: true }

/**
 * 处理ajax请求的基础方法
 * @param  {string} options.url     请求的url
 * @param  {object} options.body  请求参数
 * @param  {string} options.method: 请求方式 默认 get
 * @return {Promise} sdsd
 */
const api = ({url, body, method}) => {
  console.log(method)
  method = method || 'get'
  return new Promise((resolve, reject) => {
    Vue.http[method.toLowerCase()](url, body)
      .then((data) => {
        if (!data) {
          return resolve(null)
        }
        if (data) {
          return resolve(data)
        }
      }, () => {  // 错误处理
        console.log('error:')
      })
  })
}

export default api
