export function search(guitars, searchString, dropString) {
    let results = new Set();
    switch (dropString) {
        case "Item Name":
            for (let i = 0; i < 501; i++) {
                if (guitars[i].itemName.search(searchString) !== -1) {
                    results.add(guitars[i]);
                }
            }
            break;
        case "Brand Name":
            for (let i = 0; i < 501; i++) {
                if (guitars[i].brandName.search(searchString) !== -1) {
                    results.add(guitars[i]);
                }
            }
            break;
    }
    return results;
}