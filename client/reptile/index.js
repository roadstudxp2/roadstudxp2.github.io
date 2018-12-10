const fs = require('fs');
const axios = require('axios');
const req = axios.create({
  // baseURL: 'https://api.github.com/repos/roadstudxp2/official-website/',
  baseURL: 'https://api.github.com/repos/roadstudxp2/roadstudxp2.github.io/',
  timeout: 30000
  // headers: process.env.NODE_ENV === 'development' ? null : {'Authorization': 'token b0853fc84a9d074b04de9fe6cb6c0cfa986e67ce'}
});
const jsonParse = (data) => (JSON.parse(data.replace(/\s+/g, '')))

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
const getData = async (url, parse = true) => {
  try {
    const response = await req.get(url)
    if (response.data && response.data.body) {
      return {
        success: true,
        data: response.data.body
      }
    } else {
      return {
        success: false,
        data: {}
      }
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      data: {}
    }
  }
}

const getProducts = async (url = '/issues/3') => {
  const res = await getData(url)
  if (res.success) {
    let list = []
    res.data = jsonParse(res.data)
    if (res.data.list) {
      list = res.data.list.map((item) => {
        const {
          productImgUrl
        } = item
        item.productImgUrl = productImgUrl.substring(9, productImgUrl.length - 1)
        return item
      })
    }
    res.data.list = list
  }
  console.log(res);
  return res
}
// getProducts()

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
const getProductItem = async (url) => {
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
  // console.log(JSON.s(res));
  return res
}
// getProductItem('/issues/10')

// 13 - 50
let issuesList = []
const getIssues = async (index) => {
  let res = {}
  if (index > 60) {
    fs.writeFileSync('./productionData.json', JSON.stringify(issuesList), 'utf8')
    return
  }
  try {
    res = await getProductItem(`/issues/${index}`)
    console.log('successful-------', index);
  } catch (error) {
    console.log('-----------error', index);
  }
  if (res.success) {
    issuesList.push(res.data)
  }
  index++
  getIssues(index)
}
// 12 ~ 60
const res = getIssues(12).then(res => {
  console.log(res);
})
