function openOrSenior(data){
  const categories = []

  for (player of data) {
    const age = player[0]
    const handicap = player[1]

    if (age >= 55 && handicap > 7) {
      categories.push('Senior')
    } else {
      categories.push('Open')
    }
  }

  return categories
}
