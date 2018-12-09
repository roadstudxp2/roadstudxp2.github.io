/**
 * @desc: 工具类
 * @author: zengtiansheng
 * @update: 2018/5/5
 */

export const formatDate = (createdAt) => {
  const time = new Date(createdAt)
  const yeat = time.getFullYear()
  let month = time.getMonth() + 1
  let dd = time.getDate()
  if (month < 10) {
    month = `0${month}`
  }
  if (dd < 10) {
    dd = `0${dd}`
  }
  // const hh = time.getHours()
  // const mm = time.getMinutes()
  return `${yeat}-${month}-${dd}`
}

/**
 * 下载文件
 * @param url
 */
export const downLoadFile = url => {
  let iframe = document.getElementById('downLoadIframe')
  if (iframe) {
    iframe.src = url
  } else {
    iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.id = 'downLoadIframe'
    document.body.appendChild(iframe)
  }
}

/**
 * 删除对象空字段
 * @param obj
 * @returns {*}
 */
export const deleteEmptyObjParam = obj => {
  Object.keys(obj).forEach(item => {
    if (obj[item] === '') {
      delete obj[item]
    }
  })
  return obj
}

/**
 * JS获取n至m随机整数
 */
export const randomNums = (start, end, count) => {
  var c = end - start + 1;
  let set = new Set()
  const mackNum = () => {
    const num = Math.floor(Math.random() * c + start);
    if (set.size < count) {
      set.add(num)
      mackNum()
    }
  }
  mackNum()
  return set
}
