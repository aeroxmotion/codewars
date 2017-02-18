class Vector {
  constructor (target) {
    this.target = target
    this.length = target.length
  }

  add ({ target }) {
    return new Vector(this.target.map((value, index) => value + target[index]))
  }

  subtract ({ target }) {
    return new Vector(this.target.map((value, index) => value - target[index]))
  }

  dot ({ target }) {
    return this.target
      .map((value, index) => value * target[index])
      .reduce((prevValue, value) => prevValue + value, 0)
  }

  norm () {
    return Math.sqrt(this.target.reduce((prevValue, value) => prevValue + Math.pow(value, 2)))
  }

  equals ({ target }) {
    return this.target.every((value, index) => value === target[index])
  }

  toString () {
    return `(${this.target.join()})`
  }
}

const fn = Vector.prototype

// Decorate methods
;[
  'add',
  'subtract',
  'dot'
].forEach(method => {
  const originalMethod = fn[method]

  fn[method] = function (vector) {
    if (this.length !== vector.length) {
      throw new Error('Different vector lengths')
    }

    return originalMethod.call(this, vector)
  }
})
