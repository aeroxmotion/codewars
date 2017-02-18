function moveZeros (array) {
  const result = array.filter(value => value !== 0)
  let numZeros = array.length - result.length
  while (numZeros--) result.push(0)
  return result
}
