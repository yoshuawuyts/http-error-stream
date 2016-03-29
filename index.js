const fromString = require('from2-string')

module.exports = httpErrorStream

// Stream an error over http
// (obj, obj, obj) -> rstream
function httpErrorStream (req, res, err) {
  res.statusCode = err.statusCode
  res.setHeader('content-type', 'application/json')
  return fromString(JSON.stringify(err))
}
