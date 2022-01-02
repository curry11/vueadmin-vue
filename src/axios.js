//进行全局统一拦截处理
import axios from "axios";
import router from "./router";
import Element from "element-ui";

//axios.defaults.baseURL = "http://localhost:8081"   //定义一个全局的baseUrl

const request = axios.create({   //定义全局的head  超时时间 等
  timeout: 5000,
  headers: {
    'Content-type': "application/json; charset=utf-8"     //定义数据为json数据
  }
})

//前置拦截
request.interceptors.request.use(config => { //定义请求拦截器
  config.headers['Authorization'] = localStorage.getItem("token")  //给请求头增加token验证
  return config
})

//后置拦截
request.interceptors.response.use(response => { //定义返回拦截器
  let res = response.data;  //获取返回数据

  if (res.code === 200) {  //通过返回的code判断返回值是否正确
    return response;
  } else {
    Element.Message.error(!res.msg ? '系统异常' : res.msg)  //当res中的错误信息为空时我们自己定义 错误信息为系统异常
    return Promise.reject(response.data.msg)  //当异常时不该继续走下去
  }
},
  error => {   //异常的情况，而不是code错误

    if (error.response.data) {  //也是返回值中的msg 得到结果之前就报错了业务异常  空指针数据库问题等 有错误数据就展示
      error.massage = error.response.data.msg
    }

    if (error.response.status === 401) {   //权限不足 重新登录
      router.push("/login")
    }

    Element.Message.error(error.massage, { duration: 3000 })  //如果不是后台返回的msg 走这个直接弹窗
    return Promise.reject(error)
  }
)

export default request   //暴露出去