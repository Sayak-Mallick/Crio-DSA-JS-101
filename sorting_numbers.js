const nums = [4, 20, 12, 11, 100, 0]
nums.sort(function (a, b) {
  if (a < b) {
    return -1
  }
})
console.log(nums)

nums.sort(function (a, b) {
  return a - b
})
console.log('altername way: ', nums)

nums.sort((a, b) => a - b)
console.log('Using Arrow Function : ', nums)
