const naturalSum = (n) => {
  let sum = 0
  for (i = 0; i <= n; i++) {
    sum = sum + i
  }
  return sum
}

console.log(naturalSum(5))
