function breakChocolate (n, m) {
  let result = n * m - 1
  return isNaN(result) || result < 0 ? 0 : result
}
