String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)(\w)/g, (_, s = '', l) => s + l.toUpperCase())
}
