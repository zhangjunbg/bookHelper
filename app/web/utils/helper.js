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

  Vue.prototype.formatDate = (dt, fmt) => {
    if (!fmt) fmt = "yyyy-MM-DD";
    let date = new Date(dt);
    var o = {
      "M+": date.getMonth() + 1,//月份
      "D+": date.getDay(),//日
      "h+": date.getHours(),//hours
      "m+": date.getMinutes(),//分钟
      's+': date.getSeconds(),//秒,
    }

    if (/(y+)/.test(fmt)) {
      //RegExp.$1 是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
      }
    }
    return fmt;
  }
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