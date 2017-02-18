function iqTest (numbers) {
  const odd = []
  const even = []

  numbers.split(' ').forEach((number, index) => {
    if (number % 2) {
      odd.push(index)
    } else {
      even.push(index)
    }
  })

  return (odd.length === 1 ? odd[0] : even[0]) + 1
}
