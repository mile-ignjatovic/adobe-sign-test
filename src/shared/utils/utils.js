var idList = [];
export function generateId(type) {
    let id = Math.floor(Math.random() * 10000) + '_' + type;
    if (idList.find(el => el === id)) {
        generateId(type)
    } else {
        idList.push(id);
        return id;
    }
}
