const sliceMarkDown = (data, start, end) => {
  const indexStart = data.indexOf(start) + start.length
  const indexEnd = data.indexOf(end)
  return data.substring(indexStart, indexEnd)
}

const _PRODUCT_TITLE_ = sliceMarkDown('_PRODUCT_TITLE_START_ xxx   _PRODUCT_TITLE_END_  _PRODUCT_IMG_START_ ![image](https://user-images.git', '_PRODUCT_TITLE_START_', '_PRODUCT_TITLE_END_')
console.log(_PRODUCT_TITLE_);
