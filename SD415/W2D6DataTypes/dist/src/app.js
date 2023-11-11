/**
 *
 * @param {*} str
 */
export function ucFirst(str) {
    if (str == "") {
        return ("");
    }
    return (str.slice(0, 1).toUpperCase() + str.slice(0));
}
/**
 *
 * @param {*} str
 */
export function checkSpam(input) {
    const spamKeywords = ['viagra', 'free', 'xxxxx'];
    const lowercasedInput = input.toLowerCase();
    for (let i = 0; i < spamKeywords.length; i++) {
        if (lowercasedInput.includes(spamKeywords[i])) {
            return true;
        }
    }
    return false;
}
/**
 *
 * @param {*} str
 * @param {*} maxlength
 */
export function truncate(str, maxlength) {
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
}
export function camelize(str) {
}
export function extractCurrencyValue() { }
