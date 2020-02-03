const deepmerge = require('./index')

const baseObject = {
    "a" : {
        "1" : "Luke",
        "2" : "Ben",
        "3" : "Mace"
    },
    "b" : {
        "1" : {
            "a" : "Rey",
            "b" : "Finn"
        },
        "2" : "Carl"
    }, 
    "c" : {
        "newValue" : 111
    }
}

const secondObject = {
    "a" : {
        "1" : "Anakin",
        "2" : "Luke",
        "3" : "Ben"
    },
    "b" : {
        "1" : {
            "a" : "Padme",
            "b" : "Leia"
        },
        "2" : "Carl"
    }
}

const expected = {"a":{"1":"Anakin","2":"Luke","3":"Ben"},"b":{"1":{"a":"Padme","b":"Leia"},"2":"Carl"},"c":{"newValue":111}}

const actualResult = deepmerge.merge(baseObject, secondObject)
console.log(deepmerge.equals(actualResult, expected))