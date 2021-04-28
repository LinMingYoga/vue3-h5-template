import axios from 'axios'

function Factory({
  baseURL,
  code,
  msg,
  callFail
}) {
  const $http = axios.create({
    baseURL,
    timeout: 60 * 1000
  })

  $http.interceptors.request.use(
    config => {
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        ...config,
        validateStatus: status => {
          // 状态码在大于或等于 500 时才会 reject
          return status < 500
        }
      }
    },
    error => {
      // Notification.error({
      //   title: '错误',
      //   message: '系统繁忙，请稍后再试！'
      // })
      return Promise.reject(error)
    }
  )

  $http.interceptors.response.use(
    response => {
      const data = response.data
      if (+data.code === 20000 || +data.code === 0) {
        return data
      } else if (+data.code === 40001) {
        // Notification.error({
        //   title: '错误',
        //   message: '登录失效，请重新登录！'
        // })
      } else {
        // Notification.error({
        //   title: '错误',
        //   message: data.msg || '未知错误！'
        // })
      }
      return Promise.reject(data.msg)
    },
    error => {
      // Notification.error({
      //   title: '错误',
      //   message: '系统繁忙，请稍后再试！'
      // })
      return Promise.reject(error)
    }
  )
  return $http
}

export default Factory
