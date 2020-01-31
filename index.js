/**
 * @module deep-merge
 * @author John L. Carveth
 * @version 0.1.0
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
    //for (var key in secondObj) finalObj[key] = __mergeObjects(key,secondObj, baseObj)
    return finalObj
}

function isObject (obj) {
    return (obj && typeof(obj) === "object" && !Array.isArray(obj))
}

module.exports = mergeObjects