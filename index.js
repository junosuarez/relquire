var path = require('path')
var fs = require('fs')

var packageBase = findBase()

function relquire (id, base) {
  if (id.indexOf('~/') !== 0 ) {
    throw new Error('use `require` instead for globally namespaced or relative requires')
  }
  id = '.' + id.substr(1)
  id = path.resolve(base || packageBase, id)
  return require(id)
}

function findBase(start) {
  start = start || module.parent.filename
  if (typeof start === 'string') {
    start = start.split('/')
  }
  start.pop()
  var path = start.join('/')
  if (fs.existsSync(path + '/package.json')) {
    return path
  }
  return findBase(start)
}

module.exports = relquire
module.exports.findBase = findBase