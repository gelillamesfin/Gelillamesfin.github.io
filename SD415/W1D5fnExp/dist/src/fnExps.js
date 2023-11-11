/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, anyfunc) {
    const result = [];
    for (const num of arr) {
        result.push(anyfunc(num));
    }
    return result;
}
const arr = [1, 2, 34];
const timesHundred = myMap(arr, times100);
console.log(timesHundred);
