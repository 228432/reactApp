import axios from "axios";
import { log } from "console";

const ajax =axios.create({
    baseURL:'/api'
})

//请求拦截器
ajax.interceptors.request((config)=>{

})

//响应拦截器
ajax.interceptors.response((res)=>{
    
},(err)=>{
     // 服务器响应发生错误时的处理
     Promise.reject(err)
})

export default ajax