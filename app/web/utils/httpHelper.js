import { Message } from 'element-ui'

export default {
  reqIntSuccess:(config) => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = LocalCache.get('token')
    if (token) {
      config.headers.token = token;
    }
    // 添加时间戳
    if (config.method == 'get') {
      config.params = { ...config.params, t_t: new Date() / 1000 }
    } else if (config.method == 'post') {
      config.data = { ...config.data, t_t: new Date() / 1000 }
    }
    return config
  },
  reqIntError:(error) => {
    Message.error('加载超时')
    return Promise.reject(error)
  },
  resSuccess:res => {
    if (res.status >= 200 && res.status < 300) {
      return res
    }
    return Promise.reject(res)
  },
  resError: err => {
    // 网络异常
    return Promise.reject(err)
  },
  commSuccess:result => {
    var resultCode = result.data.resultCode

    if (resultCode === '000000' || result.data.code == '00') {
      cb && cb(result.data.data)
    } else {
      if (
        resultCode == '149991' ||
        resultCode == '999998' ||
        resultCode == '999997'
      ) {
        LocalCache.remove('token')
        LocalCache.remove('uid')
        router.push({ path: '/passport/login' });
      } else if (result.data.code) {
        if (result.data.code == '500') {
          Message({
            type: "error",
            message: result.data.msg || '系统异常'
          });
        }
        // 运营平台接口兼容
        errCb && errCb(result.data);
      } else {
        Message({
          type: "error",
          message: result.data.resultDesc
        });
        errCb && errCb(result.data);
      }
    }
    if (allData) allData(result.data);
  },
  commError:err=>{
    
  }
}
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  headers: {
    'Cache-Control': 'no-cache'
  },
  timeout: 5 * 60 * 1000 // request timeout
})

service.interceptors.request.use(
  (config) => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = LocalCache.get('token')
    if (token) {
      config.headers.token = token;
    }
    // 添加时间戳
    if (config.method == 'get') {
      config.params = { ...config.params, t_t: new Date() / 1000 }
    } else if (config.method == 'post') {
      config.data = { ...config.data, t_t: new Date() / 1000 }
    }
    return config
  },
  (error) => {
    // loadinginstace.close()
    message.error('加载超时')
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  res => {
    if (res.status >= 200 && res.status < 300) {
      return res
    }
    return Promise.reject(res)
  },
  err => {
    // 网络异常
    return Promise.reject(err)
  }
)
let api = {
  post(target, data, cb, errCb, allData) {
   return  api.http({
      url: target,
      method: "post",
      data: data,
      headers: {
        'Content-Type': 'application/json',
        "token": localStorage.getItem('token')
      }
    }, cb, errCb, allData);
  },
  postF(target, data, cb, errCb, allData) {
    api.http({
      url: target,
      method: "post",
      data: data,
      // 利用 transformRequest 进行转换配置
      transformRequest: [
        function (oldData) {
          // console.log(oldData)
          let newStr = ''
          for (let item in oldData) {
            newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&'
          }
          newStr = newStr.slice(0, -1)
          return newStr
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "token": localStorage.getItem('token')
      }
    }, cb, errCb, allData);
  },
  get(target, data, cb, errCb, allData) {
    api.http({
      url: target,
      method: "get",
      params: data
    }, cb, errCb, allData);
  },
  getD(target, _options, cb) {
    service({ url: target, ..._options }).then(result => {
      cb && cb(result.data)
    })
  },
  delete(target, data, cb, errCb) {
    api.http({
      url: target,
      method: "delete",
      params: data
    }, cb, errCb);
  },
  http(_options, cb, errCb, allData) {
    try {
      return new Promise((resolve, reject) => {
        service(_options).then(result => {
          var resultCode = result.data.resultCode

          if (resultCode === '000000' || result.data.code == '00') {
            cb && cb(result.data.data)
          } else {
            if (
              resultCode == '149991' ||
              resultCode == '999998' ||
              resultCode == '999997'
            ) {
              LocalCache.remove('token')
              LocalCache.remove('uid')
              router.push({ path: '/passport/login' });
            } else if (result.data.code) {
              if (result.data.code == '500') {
                Message({
                  type: "error",
                  message: result.data.msg || '系统异常'
                });
              }
              // 运营平台接口兼容
              errCb && errCb(result.data);
            } else {
              Message({
                type: "error",
                message: result.data.resultDesc
              });
              errCb && errCb(result.data);
            }
          }
          if (allData) allData(result.data);
        })
        //  黑框提示报错
      })
    } catch (error) {
      console.log(error)
    }
  },

  async httpAll(requestArr, cb, errCb) {
    let reqList = []
    let resList = []
    requestArr.forEach(item => {
      let temp = {
        url: item.url,
        method: item.method || 'get'
      }
      if (temp.method == 'get') {
        temp.params = item.data || {};
      } else {
        temp.data = item.data || {};
      }
      reqList.push(service(temp))
    })

    let res = await Promise.all(reqList)
    let flag = false;
    let resultCode
    res.map(item => {
      resultCode = item.data.resultCode;

      //  具体的判断 code 为哪种  才返回真正的函数
      if (resultCode == "000000" || resultCode == "00") {
        resList.push(item.data.data)
      } else {
        if (
          resultCode == '149991' ||
          resultCode == '999998' ||
          resultCode == '999997'
        ) {
          LocalCache.remove('token')
          LocalCache.remove('uid')
          router.push({ path: '/passport/login' });
        }
        flag = true;
        Message(item.data.message)
        resList.push(null)
      }
    })
    if (flag) {
      errCb && errCb(
        resList
      )
    } else {
      cb && cb(resList)
    }
  },
  getAll(requestArr, cb, errCb) {
    requestArr = requestArr.map(item => {
      item.method = 'get'
      return item;
    })
    api.httpAll(requestArr, cb, errCb);
  },
  postAll(requestArr, cb, errCb) {
    requestArr = requestArr.map(item => item.method = 'post')
    api.httpAll(requestArr, cb, errCb);
  }
}

export default api
