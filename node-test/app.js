const content = require('./app2.js')

console.log(content) // { b: 2, bark: [Function: bark] }
console.log(content.b) // 2
console.log(content.bark()) // Bark!!