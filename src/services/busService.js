/**
 * 查询bus info
 */
import api from './api/vueResource'

class BusService {

  /**
   * 获取公交车站点信息 目前没有找到合适的公交站点查询的json数据接口，估使用假数据
   * @param  {string} options.url 请求url
   * @return {Promise}
   */
  getStationList (url) {
    return api({url})
  }

  /**
   * 获取bus到站时间
   * @param  {string} options.url
   * @return {object} options.body
   */
  getArrivalTime (url, body, method) {
    return api({url, body, method})
  }

}

export default new BusService()
