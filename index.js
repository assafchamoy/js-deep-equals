function areDeepEquals(obj1, obj2) {
    // Check for properties length
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    try {
        Object.entries(obj1).forEach(([key, val]) => {
            const val2 = obj2[key];

            if (typeof val2 !== 'undefined') {
                // both obj has this property
                // Check type and values
                if (typeof val !== 'object') {
                    // Value is of primitive type
                    // => Simply check value
                    if (val !== val2) {
                        throw false;
                    }
                } else {
                    // Value type is an Object
                    // Should check its properties too
                    if (!areDeepEquals(val, val2)) {
                        throw false;
                    }
                }
            } else {
                throw false;
            }
        });

        return true;
    } catch (e) {
        return false;
    }
}

module.exports = areDeepEquals;