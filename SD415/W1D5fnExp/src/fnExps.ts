
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
  return num * 2; 
}


/**
 * @returns {number} 100 times the input
 */
export function times100(num:number):number{
  return num*100;
 }


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr:number[],anyfunc:(num1:number)=>number):number[]{
  const result:number[]=[];
  for (const num of arr){
    result.push(anyfunc(num));
  }
return result;
}

const arr=[1,2,34];
const timesHundred:number[]=myMap(arr,times100);


console.log(timesHundred);


