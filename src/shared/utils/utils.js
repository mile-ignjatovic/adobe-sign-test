var idList = [];
/**
 * generates a radom unique id with string provided
 * @param {string} type 
 */
export function generateId(type) {
    let id = Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 10000) + '_' + type;
    if (idList.find(el => el === id)) {
        generateId(type)
    } else {
        idList.push(id);
        return id;
    }
}

/**
 * returns a 2 lvl deep copy of an object provided
 * @param {object} obj 
 */
export function deepCopy(obj) {
    let copy;
    if (obj) {
        if (typeof obj === 'object') {
            if (obj === null) {
                copy = null;    
            } else {
                copy = {...obj};
            }
            for (let key in copy) {
                if (typeof copy[key] === 'object') {
                    if (copy[key] === null) {
                        copy[key] = null;
                    } else {
                        copy[key] = {...copy[key]}
                        
                        for (let innerKey in copy[key]) {
                            if (typeof copy[key][innerKey] === 'object') {
                                if (copy[key][innerKey] === null) {
                                    copy[key][innerKey] = null;
                                } else {
                                    copy[key][innerKey] = {...copy[key][innerKey]}
                                }
                            }
                        }
                    }
                }
            }
        } else {
            copy = obj;
        }
    }
    return copy;
}