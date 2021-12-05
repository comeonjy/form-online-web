import {ElMessage} from "element-plus";

const axios = require("axios");

const service = axios.create({
    baseURL: process.env["VUE_APP_FORM_BASE_API"],
    timeout: 10 * 1000,
})

//  请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Accept'] = 'application/json'
        config.headers['Request-From'] = 'wap'
        let token = sessionStorage.getItem('loginToken') || null
        if (token) {
            // 如果token不为null，否则传token给后台
            config.headers['Token'] = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data
        //届时根据后端返回success或者code值判断
        if (res.code > 0) {
            ElMessage({
                type: 'error',
                message: res.msg
            })
        } else {
            return res
        }
    },
    (error) => {
        //响应错误
        console.log('err'+error)
        return Promise.reject(error)
    }
)

export default service
