


export const findWords = (arr: string[], sentence: string) => {
    const incorrectWords = [];

    let words = sentence?.split(' ');

    // transform words that end with special characters
    words = words.map((element) => {
        if (isLastCharSpecial(element)) return element.slice(0, -1)
        else return element;
    });

    // find the existence of individual words
    for (const word of words) {
        if (arrayBinarySearch(arr, word.toLowerCase()) === -1) {
            incorrectWords.push(word);
        }
    }
    return incorrectWords.length > 0 ? incorrectWords : true;
}


export const isLastCharSpecial = (str: string) => {
    // Use a regular expression to check if the last character is a special character
    return /[^A-Za-z0-9]$/.test(str);
}


export const arrayBinarySearch = (arr: string | any[], x: string) => {

    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
        mid = l + Math.floor((r - l) / 2);

        // If the element is present at the middle
        if (arr[mid].toLowerCase() == x.toLowerCase())
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid].toLowerCase() > x.toLowerCase())
            r = mid - 1;

        // Else the element can only be present
        // in right subarray
        else
            l = mid + 1;
    }

    // We reach here when element is not
    // present in array
    return -1;
}


export const fieldFilters = (listOfFields: any, obj: any) => {
    let returnedObject = {}
    const fieldKeys = Object.keys(obj);
    let filteredFileds = fieldKeys.filter(e => {
        if ((listOfFields.includes(e))) return true
        return false
    });
    filteredFileds.forEach(elem => {
        returnedObject = { ...returnedObject, [elem]: obj[elem] }
    })
    return returnedObject;
}