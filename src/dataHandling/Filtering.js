export function search(guitars, searchString, dropString) {
    let results = []; // declares an empty array for storing the results of the search
    switch (dropString) { // switch the value of their dropdown choice for what var they're searching against
        case "Item Name": // if dropString is "Item Name" then...
            for (let i = 0; i < guitars.length; i++) { // repeat for each guitar
                if (guitars[i].itemName.search(searchString) !== -1) { // check if the current guitar has the user's search term in it's name
                    results.push(guitars[i]); // if so add it to the list of results
                }
            }
            break; // break from this case
        case "Brand Name": // similarly, if the user is searching for a brand
            for (let i = 0; i < 501; i++) { // loop through all the guitars
                if (guitars[i].brandName.search(searchString) !== -1) { // check if the current guitar we're looking at has the user's search term in the name of the brand that made it
                    results.push(guitars[i]); // if so add it to the list of results
                }
            }
            break; // break from case
    }
    return results; // return all the found results
}