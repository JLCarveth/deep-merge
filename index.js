/**
 * @module deeper-merge
 * @author John L. Carveth
 * @version 1.0.0
 * 
 * Used to recursively merge a base object with another object (Second object).
 */

/**
 * Merges a base object with another object. Any properties of baseObj
 * that do not exist in secondObj are added to secondObj. If both objects have a
 * property with the same key, secondObj takes precedence.
 * @param {Object} baseObj 
 * @param {Object} secondObj 
 */
function mergeObjects (baseObj, secondObj) {
    const finalObj = {}

    if (secondObj == undefined) return baseObj
    if (baseObj == undefined) return secondObj
    for (var key in baseObj) {
        var property    = baseObj[key]
        var newProp     = secondObj[key]
        if (isObject(property)) {
            finalObj[key] = mergeObjects(property, newProp)
        } else if (newProp == undefined) {
            finalObj[key] = property
        } else {
            finalObj[key] = newProp
        }
    }
    for (var key in secondObj) {
        var property    = baseObj[key]
        var newProp     = secondObj[key]
        if (isObject(newProp)) {
            finalObj[key] = mergeObjects(property, newProp)
        } else if (property == undefined) {
            finalObj[key] = newProp
        } else {
            finalObj[key] = newProp
        }
    }
    return finalObj
}

/**
 * @param {Object} a
 * @param {Object} b
 */
function isEqual (a,b) {
    if (typeof a != typeof b) return false
    if (isObject(a) && isObject(b)) {
        return __isEqual(a,b)
    }
    else return a == b
}

/**
 * Private recursive function to determine structural equality.
 * This method is only called on two objects.
 * @param {Object} a 
 * @param {Object} b 
 */
function __isEqual (a,b) {
    var equal = true
    const aLen = Object.keys(a).length
    const bLen = Object.keys(b).length

    if (aLen != bLen) return false
    for (const key in a) {
        if (isObject(a[key])) {
            if (isObject(b[key])) {
                equal = equal && __isEqual(a[key],b[key])
            } else return false
        } else {
            // Assuming they are not objects
            equal = equal && (a[key] == b[key])
        }
    }
    return equal
}

function isObject (obj) {
    return (obj && typeof(obj) === "object" && !Array.isArray(obj))
}

module.exports = {
    "merge" : mergeObjects,
    "equals" : isEqual
}