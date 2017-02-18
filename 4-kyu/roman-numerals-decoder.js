const equivalents = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function solution (roman) {
  let i = roman.length
  let prevNumber = 0
  let result = 0

  while (i--) {
    const number = equivalents[roman.charAt(i)]

    if (number < prevNumber) {
      result -= number
    } else {
      result += number
    }

    prevNumber = number
  }

  return result
}
