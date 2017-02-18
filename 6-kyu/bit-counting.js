function countBits (n) {
  return [].reduce.call(n.toString(2), (a, b) => +a + +b, 0)
}
