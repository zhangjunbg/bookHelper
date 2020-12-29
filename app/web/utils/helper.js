import http from './request'

export default function helpInit(
  Vue
) {
  // 使用Vue.use()方法就会调用工具方法中的install方法
  Vue.prototype.$post = http.post;
  Vue.prototype.$postF = http.postF;
  Vue.prototype.$delete = http.delete;
  Vue.prototype.$get = http.get;
  Vue.prototype.$getD = http.getD;
  Vue.prototype.$getAll = http.getAll;
  Vue.prototype.$postAll = http.postAll;
  Vue.prototype.$postAll = http.postAll;

  Vue.prototype.urlEncode = (param, key, encode) => {
    if (param == null) return '';
    let paramStr = '';
    const t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
      paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
      for (const i in param) {
        const k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
        paramStr += Vue.prototype.urlEncode(param[i], k, encode)
      }
    }
    return paramStr;
  }
  // 下载
  Vue.prototype.$download = (data, fileName, type) => {
    //设置excel格式
    if (!type) type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8';
    let blob = new Blob([data], { type: type });
    if ('msSaveOrOpenBlob' in navigator) {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
      return;
    } else {
      let downloadElement = document.createElement('a');
      let href = window.URL.createObjectURL(blob); //创建下载的链接
      downloadElement.href = href;
      downloadElement.download = fileName; //下载后文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); //点击下载
      document.body.removeChild(downloadElement); //下载完成移除元素
      window.URL.revokeObjectURL(href); //释放掉blob对象
    }
  }
}