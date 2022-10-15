

export function getAttrib(guitars) {
    let tempSet = new Set();
    for (let i = 0; i < guitars.length; i++) {
        tempSet.add(guitars[i].colour);
    }
    return tempSet;
}