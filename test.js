const deepmerge = require('./index')

const baseConfig = {
    "port" : 8080,
    "roles": {
        "admin": {
            "roles" : "*"
        },
        "user": {
            "roles" : "comment"
        }
    },
    "commentsPerPost" : 10
}

const userConfig = {
    "port" : 80,
    "roles": {
        "admin": {
            "roles" : "*"
        },
        "user": {
            "roles" : "comment"
        },
        "author" : {
            "roles" : "comment,writePost"
        }
    }
}

const expected = {
    "port" : 80,
    "roles": {
        "admin": {
            "roles" : "*"
        },
        "user": {
            "roles" : "comment"
        },
        "author" : {
            "roles" : "comment,writePost"
        }
    },
    "commentsPerPost" : 10
}

const actualResult = deepmerge.merge(baseConfig, userConfig)
console.log(JSON.stringify(actualResult))
console.log(deepmerge.equals(actualResult, expected))