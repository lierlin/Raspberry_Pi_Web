import axios from "axios";
/* import {
  notification
} from 'ant-design-vue'; */
//TODO 创建 axios 实例
export const service = axios.create({
  baseURL: "/api/", // api base_url
  timeout: 1000 * 5, // 请求超时时间 毫秒
});

//TODO请求拦截
/* service.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers['token'] = localStorage.token;
  }
  return config
}, error => {
  return Promise.reject(error)
}) */

//TODO响应拦截
/* service.interceptors.response.use(response => {
  if (response.data.requstresult == "-1") {
    // notification['error']({
    //   message: '错误',
    //   description: response.data.reason,
    //   duration: 4
    // })
    console.info('token 错误');
    localStorage.removeItem('token')
    router.push({
      path: '/login'
    })
  }
  return response
}, error => {
  // TODO取消请求不报错 Cancel{message:undefined}
  if (axios.isCancel(error)) {
    console.info('cancel')
    return Promise.reject(error)
  } else {
    console.info(error.message)
    notification['warn']({
      message: '请求超时',
      description: ((error.response || {}).data || {}).message || error.message || '请求出现错误，请稍后再试',
      duration: 3
    })
    return Promise.reject(error)
  }
}) */
