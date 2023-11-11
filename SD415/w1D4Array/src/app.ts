

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1,2,3]));
/**
 * 
 * @param {number} aa is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa: number, b: number, c: number): number{ 
let maxNum=aa;
   
    if (b>aa&&b>c){
        maxNum=b;
    }
    if (c>aa&&c>b){
        maxNum=c;
        
    }
    return maxNum;  //IMPLEMENT THIS -- DO NOT USE MATH.MAX\

}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number{
let sum=0;

for(const num of arr){
    sum+=num;
}
return sum;
//IMPLEMENT THIS 
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number{
//IMPLEMENT THIS 
let mult=1;
for(const num of arr){
    mult*=num;
}
    return mult;

}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words 
 * @returns {number} length of longest word
 */
export function findLongestWord(arr: string[]): number{
let longest:string=arr[0];
let totalLength=0;

for(const word of arr){
    if(word.length >= longest.length){
        longest=word
    }
    totalLength=longest.length
}

    return totalLength ;
}

/*4 Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and 
// reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, 
// reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its 
// elements. This is a method that is very space efficient.  It does not create a new array or copy of the array.  
// It returns the original array. Neither may use the standard reverse method.    */
export function reverseArray<T>(arr: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

export function reverseArrayInPlace<T>(arr: T[]): T[] {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}


/*5score students*/
export function scoreExams(studentAnswers: number[][], correctAnswers: number[]): number[] {
    const scores: number[] = [];

    for (let i = 0; i < studentAnswers.length; i++) {
        let score = 0;

        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (studentAnswers[i][j] === correctAnswers[j]) {
                score += 1;
            }
        }

        scores.push(score);
    }

    return scores;
}


/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows: number, cols: number): number[][]{
//IMPLEMENT THIS 
let newArray:number[][]=[]

let count = 1;
for (let i = 0; i < rows; i++) {
    let row: number[] = [];
    for (let j = 0; j < cols; j++) {
        row.push(count++);
    }
    newArray.push(row);
}

return newArray;
} 
