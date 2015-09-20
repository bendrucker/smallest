'use strict'

var toArray = require('to-array')

module.exports = function smallest (values) {
  if (!Array.isArray(values)) {
    values = toArray(arguments)
  }
  return values.slice().sort(order)[0]
}

function order (a, b) {
  return a - b
}
