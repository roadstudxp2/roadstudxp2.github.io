const fs = require('fs');
const axios = require('axios');
const req = axios.create({
  baseURL: 'https://api.github.com/repos/roadstudxp2/roadstudxp2.github.io',
  timeout: 30000
});
const jsonParse = (data) => (JSON.parse(data.replace(/\s+/g, '')))

const sliceMarkDown = (data, start, end) => {
  const indexStart = data.indexOf(start) + start.length
  const indexEnd = data.indexOf(end)
  return data.substring(indexStart, indexEnd)
}

const getData = async (url, parse = true) => {
  try {
    const response = await req.get(url)
    if (response.data) {
      return {
        success: true,
        data: response.data
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

const getProducts = async (url = '/issues/11/comments') => {
  let list = []
  const res = await getData(url)
  if (res.success) {
    // res.data = jsonParse(res.data)
    res.data.forEach(item => {
      const itemData = item.body //.replace(/\s+/g, '')
      console.log('==========console.log(item);====1111111====');
      console.log(itemData);
      console.log('==========console.log(item);====2222222====');
      const _TITLE_ = sliceMarkDown(itemData, '_TITLE_START_', '_TITLE_END_')
      const _TIME = sliceMarkDown(itemData, '_TIME_START_', '_TIME_END_')
      const _DETAIL_ = sliceMarkDown(itemData, '_DETAIL_START_', '_DETAIL_END_')
      list.push({
        title: _TITLE_,
        describe: _TIME,
        detail: _DETAIL_
      })
    })
  }
  fs.writeFileSync('./articaleData.json', JSON.stringify(list.reverse()), 'utf8')
}

getProducts()
