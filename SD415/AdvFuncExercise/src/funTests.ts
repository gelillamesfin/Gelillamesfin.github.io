
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr:number[],func:(num:number)=>number):number[]{
    let newArr:number[]=[];
    for (const num of arr){
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
export function myFilter(arr:number[], func:(num:number)=>number):number[]{
    let newArray:number[]=[]
    for(const num of arr){
        if (func(num)){
            newArray.push(num)
           }
    }
           return newArray
    }

//IMPLEMENTATION NEEDED

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
export function myReduce(arr:number[],func:(acc:number,num:number)=>number,initialValue:number):number{
    
        for (const num of arr){
            initialValue=(func(initialValue,num))
        }
    
    return initialValue;
}
    