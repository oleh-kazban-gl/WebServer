const https = require('https');
const http = require('http');

const request = (api, secure = true, callback, options) => {
  const package = secure ? https : http;

  let data = '';

  package.get(api, options, (response) => {
    response.on('data', chunk => {
      data += chunk;
    })

    response.on('error', error => {
      callback(undefined, error);
    })

    response.on('close', () => {
      callback(JSON.parse(data));
    })
  })
}

module.exports = {
  request,
}
