/* module.exports = function check(str, bracketsConfig) {
  const pairs = bracketsConfig.map(a => a.join(''))
  let temp = ''
  while (str.length != temp.length) {
    temp = str
    pairs.forEach(pair => {
      str = str.replace(pair, '')
    })
  }
  return str.length === 0
} */

module.exports = function check(str, bracketsConfig) {
  const pairs = new RegExp(bracketsConfig.map(a => a.map(x => '[\\x' + x.charCodeAt(0).toString(16) + ']').join('')).join('|'))
  while (pairs.test(str)) {
    str = str.replace(pairs, '')
  }
  return str.length === 0
}
