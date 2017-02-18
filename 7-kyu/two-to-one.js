function longest (s1, s2) {
  return (s1 + s2)
    .split('').sort().join('')
    .replace(/([a-z])(?=[a-z]*\1)/g, '')
}
