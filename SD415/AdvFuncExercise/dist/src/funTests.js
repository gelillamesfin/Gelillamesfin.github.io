/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myMap(arr, func) {
    let newArr = [];
    for (const num of arr) {
        newArr.push(func(num));
    }
    return newArr;
}
/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myFilter(arr, func) {
    let newArray = [];
    for (const num of arr) {
        if (func(num)) {
            newArray.push(num);
        }
    }
    return newArray;
}
//IMPLEMENTATION NEEDED
/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
export function myReduce(arr, func, initialValue) {
    for (const num of arr) {
        initialValue = (func(initialValue, num));
    }
    return initialValue;
}
