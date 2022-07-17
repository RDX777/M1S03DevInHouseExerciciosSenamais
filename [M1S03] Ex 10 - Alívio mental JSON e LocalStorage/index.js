const json = '{"result":true, "count":42}'
const obj = JSON.parse(json)
console.log(obj.count)

const myArr = ['bacon', 'lettuce', 'tomatoes']
const myArrStr = JSON.stringify(myArr)
console.log(myArrStr)