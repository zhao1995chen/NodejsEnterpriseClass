const path = require('path')
const url = '/xx/yy/zz.js'

console.log(path.dirname(url)); // /xx/yy
console.log(path.basename(url)); // zz.js
console.log(path.extname(url)); // .js
console.log(path.parse(url)); // { root: '/', dir: '/xx/yy', base: 'zz.js', ext: '.js', name: 'zz' }
