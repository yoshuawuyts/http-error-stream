const test = require('tape')
const http-error-stream = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(http-error-stream)
})
