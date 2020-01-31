const deepmerge = require('./index')

const baseObject = {}

const secondObject = {}
const actualResult = deepmerge(baseObject, secondObject)
console.log(JSON.stringify(actualResult))