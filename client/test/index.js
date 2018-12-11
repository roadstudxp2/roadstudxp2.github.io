const randomNum = (start, end, count) => {
  var c = end - start + 1;
  // return Math.floor(Math.random() * c + start);
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
// let r = randomNum(0, 50, 5)
// console.log(r);

// const s = 'http://localhost:3000/official-website/products/0'
// let rr = s.substring(0, s.lastIndexOf('/products/'))
// console.log(rr);

const randomNums = (start, end, count) => {
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

function getRandomList(productionData) {
  const randomList = [];
  const sets = randomNums(0, productionData.length - 1, 4);
  sets.forEach(itemNum => {
    let ra = productionData[itemNum];
    console.log('---ra---', ra);
    randomList.push(Object.assign(ra, {indexId: itemNum}));
  });
  return randomList;
}
const productionData = [{},{},{},{}]
const r = getRandomList(productionData)
console.log(r);
