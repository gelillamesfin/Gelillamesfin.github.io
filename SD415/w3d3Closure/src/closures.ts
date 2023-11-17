

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(arr:number[]){
 
    return(function(x:number){
        return (arr.includes(x))
    })
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */

export function inBetween(low:number,high:number){
    return (function (x:number){
        return(x>=low&&x<=high)
    })
}
//const arr2=[3,4,5,6]
//const filter3to6=inBetween(3,6);
//console.log(filter3to6(2));
//console.log(arr2.filter(filter3to6));



/**
 * @returns {Function} closure that returns it's number
 */

export function makeArmy(): (() => number)[] {
    let shooters: (() => number)[] = [];
  
    for (let i = 0; i < 10; i++) {
      shooters.push(() => i);
    }
  
    return shooters;
  }
//   let army=makeArmy();
//   const shooter0=army[5]();
//   console.log(shooter0);
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...

