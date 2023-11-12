
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str:string):string {

  if (str.length === 0) {
    return str; 
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

export default ucFirst;
  /**
   * 
   * @param {*} str 
   */
  export  function checkSpam(input: string): boolean {
      const spamKeywords: string[] = ['viagra', 'free', 'xxxxx'];
  
      
      const lowercasedInput: string = input.toLowerCase();
  
  
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

  export function truncate(str:string, maxlength:number):string {
 
  if (str.length <= maxlength) {
    return str;
  } else {
    
    return str.substring(0, maxlength - 1) + "…";
  }
}

/**
 * 
//  * @param {Array} arr of numbers
//  * @returns {number} the total of the maximal subarray
 
 */
  export function getMaxSubSum(arr:number[]) {
 
    let maxSum = 0;
    let currentSum = 0;
 
    for (let num of arr) {
      currentSum = Math.max(0, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }
 
    return maxSum;
  }





  export function camelize(str:string) {
 
    return str.replace(/[-_\s]([a-zA-Z])/g, (_, char) => char.toUpperCase());
  }
  


export function extractCurrencyValue(str:string){

    return Number(str.replace(/[^0-9]/g, ''));
  }
