export function search(guitars, searchString, dropString) {
    let results = [];
    switch (dropString) {
        case "Item Name":
            for (let i = 0; i < 501; i++) {
                if (guitars[i].itemName.search(searchString) !== -1) {
                    results.push(guitars[i]);
                }
            }
            break;
        case "Brand Name":
            for (let i = 0; i < 501; i++) {
                if (guitars[i].brandName.search(searchString) !== -1) {
                    results.push(guitars[i]);
                }
            }
            break;
    }
    return results;
}