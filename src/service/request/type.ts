// ------------------------------------------ 接口类型

/* 
  拦截器默认返回给回调的参数 config, Response
*/
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义一个拦截器接口,分别对应各个情况的回调,当然不是必须的,是可选的
// 传入一个泛型,默认值是AxiosResponse
export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig   // 请求拦截
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T   // response 返回的还是config那层壳，返回数据在data内
  responseInterceptorCatch?: (error: any) => any
}

// 定义一个新的接口,继承于AxiosRequestConfig,表示我们传入的参数要有interceptors和showLoading,当然也是可选的
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 对原来的AxiosRequestConfig进行扩展,添加拦截器和是否显示loading,可选的
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}