import axios, { AxiosResponse } from "axios";

import { AxiosInstance } from 'axios'         // axios 实例类型
import { RequestConfig, RequestInterceptors } from './type'

// // 引入 loading组件
// import { ElLoading } from 'element-plus'
// import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'


// Request 封装, 实际就是 axios实例 + 拦截器
class Request {
    instance: AxiosInstance
    interceptors?: RequestInterceptors
    showLoading: boolean
    // loading?: ILoadingInstance,    // loading 实例

    constructor(config: RequestConfig) {
        this.instance = axios.create(config)       // config都是可选的，{baseURL,timeout,headers}
        this.interceptors = config.interceptors
        this.showLoading = config.showLoading ?? true  // 只有当左边值为null/undefined，才会取右边值

        // 自定义的拦截器, 传入成功回调与失败回调。 ?. 没有进一步属性返回undefined
        this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorCatch)
        this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorCatch)

        // 统一的基础拦截器，所有实例共有
        this.instance.interceptors.request.use(
            config => {
                console.log("请求拦截", config)
                // 所有的请求都添加loading
                // if (this.showLoading) {
                //     // 添加loading
                //     this.loading = ElLoading.service({
                //     lock: true,
                //     text: '正在请求数据....',
                //     background: 'rgba(0, 0, 0, 0.5)'
                //     })
                // }
                return config
            },
            err => {
                console.log("请求拦截失败", err)
                return Promise.reject(err);
            }
        )

        this.instance.interceptors.response.use(
            response => {
                console.log("响应拦截", response)
                if (!(response.status === 200)) console.log("请求失败")
                return response
            },
            err => {
                console.log("响应拦截失败", err)
                return Promise.reject(err);
            }
        )
    }


    // 1.传入返回结果的类型T,这样在Promise中我们就知道返回值的类型是T了
    // 2.通过RequestConfig<T>,将返回值类型T告诉接口,从而在接口的返回响应拦截中指明返回值类型就是T
    request<T = AxiosResponse>(config: RequestConfig<T>): Promise<T> {
        // 返回一个Promise对象,好让使用者在外面拿到数据
        return new Promise((resolve, reject) => {
            // 1.单个请求对请求config的处理
            if (config.interceptors?.requestInterceptor) {
                // 如果有单个请求的拦截器,就执行一下这个函数,然后返回
                config = config.interceptors.requestInterceptor(config)
            }

            // 2.判断单个请求是否需要显示loading
            if (config.showLoading === false) {
                this.showLoading = config.showLoading
            }

            // 3.发起请求
            this.instance
                // request里面有两个泛型,第一个泛型默认是any,第二个泛型是AxiosResponse
                // 由于前面我们已经将res.data直接返回了,所以其实最后的数据就是T类型的,所以我们在第二个泛型中要指定返回值的类型T
                .request<any, T>(config)
                .then((res) => {
                    // 1.单个请求对数据的处理
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res)
                    }
                    // 2.将showLoading设置true, 这样不会影响下一个请求
                    // this.showLoading = true

                    // 3.将结果resolve返回出去
                    resolve(res)
                })
                .catch((err) => {
                    // 将showLoading设置true, 这样不会影响下一个请求
                    // this.showLoading = true
                    reject(err)
                    return err
                })
        })
    }

    // 实际上axios为了方便也提供了对应的别名方法，axios.get(url[, config])，axios.post(url[, data[, config]])
    get<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'GET' })
    }

    post<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'POST' })
    }

    delete<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'DELETE' })
    }

    patch<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'PATCH' })
    }


}

export default Request