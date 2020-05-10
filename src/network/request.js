import axios from 'axios'
export function request(config) {
    //1.创建实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:3000
    })

    //2.创建拦截器
    instance.interceptors.request.use(config => {
        return config;
    },error => {
        console.log(error);
    })

    instance.interceptors.response.use(config => {
        return config;
    },error => {
        console.log(error);
    })

    return instance(config)
}
