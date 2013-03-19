var path = require('path')
var fs = require('fs')

var basedir = findBase()

function relquire (id) {
  if (id.indexOf('~/') !== 0 ) {
    throw new Error('use `require` instead for globally namespaced or relative requires')
  }
  id = '.' + id.substr(1)
  id = path.resolve(basedir, id)
  return require(id)
}

function findBase(start) {
  start = start || module.parent.filename.split('/')
  start.pop()
  var path = start.join('/')
  if (fs.existsSync(path + '/package.json')) {
    return path
  }
  return findBase(start)
}

module.exports = relquire