// service统一出口
import Request from './request'
import { BASE_URL, TIME_OUT } from './request/config'

// 创建一个axios 实例，并进行基础配置
const axios = new Request({
    // 传入baseurl
    baseURL: BASE_URL,
    // 传入超时时间
    timeout: TIME_OUT,
    // 传入拦截器
    interceptors: {
        requestInterceptor: (config) => {
            // 给当前请求实例所有的请求添加token
            const token = '19kSrzwKuP6z8C9AbGKYa50NdYGnrUJE'
            if (token) {
                config.headers ? config.headers.apifoxToken = token : ''
            }

            console.log('创建实例自定义的请求拦截')
            return config
        },
        requestInterceptorCatch: (err) => {
            console.log('请求失败的拦截')
            return err
        },
        responseInterceptor: (res) => {
            console.log('创建实例自定义的响应拦截')
            return res
        },
        responseInterceptorCatch: (err) => {
            console.log('响应失败的拦截')
            return err
        }
    }
})


export default axios 