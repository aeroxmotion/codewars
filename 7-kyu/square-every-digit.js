function squareDigits (num) {
  let ret = ''

  ;[].forEach.call(num + '', n => {
    ret += n * n
  })

  return +ret
}
