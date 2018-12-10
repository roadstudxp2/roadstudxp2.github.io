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

const s = 'http://localhost:3000/official-website/products/0'
let rr = s.substring(0, s.lastIndexOf('/products/'))
console.log(rr);
