import axios from 'axios';
import store from 'store';

console.log(process.env.NODE_ENV);

const req = axios.create({
  baseURL: 'https://api.github.com/repos/roadstudxp2/official-website/',
  timeout: 3000
  // headers: process.env.NODE_ENV === 'development' ? null : {'Authorization': 'token b0853fc84a9d074b04de9fe6cb6c0cfa986e67ce'}
});

const jsonParse = (data) => (JSON.parse(data.replace(/\s+/g, '')))

const setStore = (name, data, endTime) => {
  store.set(name, {data, endTime: endTime || new Date().getTime() + 24 * 60 * 60 * 1000})
}
const getStore = (name) => {
  const res = store.get(name)
  const nowTime = new Date().getTime()
  if (res && res.endTime > nowTime) {
    return res.data
  }
  return null
}

const sliceMarkDown = (data, start, end) => {
  const indexStart = data.indexOf(start) + start.length
  const indexEnd = data.indexOf(end)
  return data.substring(indexStart, indexEnd)
}

const sliceProduceUrls = (str) => {
  let urls = []
  const imgUrls = str.replace(/\s+/g, '').split('![image]')
  if (Array.isArray(urls)) {
    for (const item of imgUrls) {
      if (item) {
        urls.push(item.substring(1, item.length - 1))
      }
    }
  }
  return urls
}

const getData = async(url, parse = true) => {
  // 接口缓存一天
  let res = getStore('API' + url)
  if (res) {
    return res
  }
  try {
    const response = await req.get(url)
    if (response.data && response.data.body) {
      res = {
        success: true,
        data: response.data.body
      }
      setStore('API' + url, res)
      return res
    } else {
      return {success: false, data: {}}
    }
  } catch (error) {
    console.log(error)
    return {success: false, data: {}}
  }
}

export const getProducts = async(url = '/issues/3') => {
  const res = await getData(url)
  if (res.success) {
    let list = []
    res.data = jsonParse(res.data)
    if (res.data.list) {
      //  ![image](https://user-images.githubusercontent.com/15622519/42405252-9bf18624-81c5-11e8-9dd7-359db8daed9c.png)
      list = res.data.list.map((item) => {
        const {productImgUrl} = item
        item.productImgUrl = productImgUrl.substring(9, productImgUrl.length - 1)
        return item
      })
    }
    res.data.list = list
  }
  return res
}

/**
 * _PRODUCT_TITLE_START_
 * _PRODUCT_TITLE_END_
 * 
 * _PRODUCT_IMG_START_
 * _PRODUCT_IMG_END_
 * 
 * _PRODUCT_DESCRIBE_START_
 * _PRODUCT_DESCRIBE_END_
 * 
 * _PRODUCT_DETAIL_START_
 * _PRODUCT_DETAIL_END_
 * 
 * 
 * @param {*} url 
 */ 
export const getProductItem = async(url) => {
  const res = await getData(url)
  if (res.success) {
    const _PRODUCT_TITLE_ = sliceMarkDown(res.data, '_PRODUCT_TITLE_START_', '_PRODUCT_TITLE_END_')
    const _PRODUCT_IMG_ = sliceMarkDown(res.data, '_PRODUCT_IMG_START_', '_PRODUCT_IMG_END_')
    const _PRODUCT_DESCRIBE_ = sliceMarkDown(res.data, '_PRODUCT_DESCRIBE_START_', '_PRODUCT_DESCRIBE_END_')
    const _PRODUCT_DETAIL_ = sliceMarkDown(res.data, '_PRODUCT_DETAIL_START_', '_PRODUCT_DETAIL_END_')
    const imgUrls = sliceProduceUrls(_PRODUCT_IMG_)
    res.data = {
      imgUrls,
      title: _PRODUCT_TITLE_,
      describe: _PRODUCT_DESCRIBE_,
      detail: _PRODUCT_DETAIL_
    }
  }
  return res
}
