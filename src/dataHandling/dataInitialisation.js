

export function getAttrib(guitars, attrib) {
    let tempSet = new Set();
    for (let i = 0; i < guitars.length; i++) {
        tempSet.add(attrib);
    }
    return tempSet;
}