# deep-merge

A small tool used to recursively merge nested javascript objects. The primary function of this module is `merge(a,b)`. This function takes two objects, `a` and `b`, and returns a new object with merged properties from both parameters. This module was designed to solve the problem of merging an existing user-modified configuration object with a base configuration object.   
  
The base object can have new properties added as the software is developped, and those new properties will be persisted to the existing user configuration. If there is a field that already exists in the user configuration, it is preserved.

# Installation
    
    npm install deeper-merge --save

# Example

    const deepmerge = require('deeper-merge')

    const baseObj   = {...}
    const secondObj = {...}

    const merged = deepmerge.merge(baseObj,secondObj)

An example merging two configuration files:

    const baseConfig = {
        "port" : 8080,
        "roles": {
            "admin": {"roles" : "*"},
            "user": {"roles" : "comment"}},
        "commentsPerPost" : 10
    }

    const userConfig = {
        "port" : 80,
        "roles": {
            "admin": {"roles" : "*"},
            "user": {"roles" : "comment"},
            "author" : {"roles" : "comment,writePost"}}
    }

    const expected = {
        "port" : 80,
        "roles": {
            "admin": {"roles" : "*"},
            "user": {"roles" : "comment"},
            "author" : {"roles" : "comment,writePost"}},
        "commentsPerPost" : 10
    }

In the above example, the properties that were modified by the user were preserved, and new properties introduced by the base configuration are also merged into the new object.

`deep-merge` also provides a recursive equality function, to test for the strcutural equality of nested Javascript objects.

| Function | Parameters | Description | Returns |
|---|---|---|---|
| equals   |  - a {Object} - b {Object}  | Validates if the two objects are structurally equal.                                   | Return true if a == b.                                 |
| merge    |  - a {Object} - b {Object}  | Performs a recursive deep merge on the two objects. All properties of b are preserved. | Returns an object with the properties of both a and b. |
|||||
