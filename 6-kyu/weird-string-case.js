function toWeirdCase(string){
  return string.split(' ').map((word) => {
    return word.split('').map((char, i) => {
      return (i + 1) % 2 === 0 ? char : char.toUpperCase()
    }).join('')
  }).join(' ')
}
