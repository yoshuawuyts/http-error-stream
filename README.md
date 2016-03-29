# http-error-stream [![stability][1]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Stream an error over http. Takes a `server-error` error and streams it back
out.

## Usage
```js
const errorStream = require('http-error-stream')
const serverError = require('server-error')
const bole = require('bole')
const http = require('http')

const log = bole('my-service')
const error = serverError(log)

http.createServer(function (req, res) {
  const err = error.client('oh no!')
  // set statusCode, content-type and stream error as JSON
  errorStream(req, res, err).pipe(res)
}).listen
```

## Installation
```sh
$ npm install http-error-stream
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/http-error-stream.svg?style=flat-square
[3]: https://npmjs.org/package/http-error-stream
[4]: https://img.shields.io/travis/yoshuawuyts/http-error-stream/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/http-error-stream
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/http-error-stream/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/http-error-stream
[8]: http://img.shields.io/npm/dm/http-error-stream.svg?style=flat-square
[9]: https://npmjs.org/package/http-error-stream
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
