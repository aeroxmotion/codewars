function DNAStrand(dna){
  const complements = {
    A: 'T', T: 'A',
    C: 'G', G: 'C'
  }

  return dna.replace(/[ATCG]/g, letter => complements[letter])
}
