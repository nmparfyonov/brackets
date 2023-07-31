module.exports = function check(str, bracketsConfig) {
  const pairs = bracketsConfig.map(a => a.join(''))
  let temp = ''
  while (str.length != temp.length) {
    temp = str
    pairs.forEach(pair => {
      str = str.replace(pair, '')
    })
  }
  return str.length === 0
}

/* module.exports = function check(str, bracketsConfig) {
  const regex = new RegExp(bracketsConfig.map(a => '\\' + a.join('\\')).join('|'))
  let temp = ''
  while (str.length != temp.length) {
    temp = str
    str = str.replace(regex, '')
  }
  return str.length === 0
} */
