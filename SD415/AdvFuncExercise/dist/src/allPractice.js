// function double(num:number):number{
//     return(num*2);
// }
// function cube(num:number):number{
//     return (num*num*num);
// }
// function myMap(arr:number[], func:(num:number)=>number):number[]{
//     return(arr.map(num=>func(num)));
// }
// function myMap2(arr:number[],func:(num:number)=>number):number[]{
// let newArr:number[]=[];
// for (const num of arr){
// newArr.push(func(num));
// }
// return newArr;
// }
// console.log(myMap2([1,2,3,4],double));
// console.log(myMap2([1,2,3,4],cube));
// // console.log(myMap([1,2,3],double))
// // console.log(myMap([1,2,3],cube))
// function isEvens(num:number):boolean{
//     return (num%2===0)
// }
// function greaterNum(num:number):boolean{
//     return (num>1)
// }
// // function myFilter(arr:number[],func:(num:number)=>number):number[]{
// //     return arr.filter(num=>func(num))
// // }
// //without FILTER
// function myfilter2(arr:number[], func:(num:number)=>number):number[]{
//     let newArray:number[]=[]
//     for(const num of arr){
//         if (func(num)){
//             newArray.push(num)
//            }
//     }
//            return newArray
//     }
// console.log(myfilter2([1,2,3,4,6,8],isEvens));
// console.log(myfilter2([1,2,3,-1,-2,6,7,8],greaterNum));
// function reducedSum(arr:number[]):number{
// return arr.reduce((accu,curr)=>
//     accu+=curr
// ,0)
// }
// console.log(reducedSum([1,2,3,4]));
function sum(acc, num) {
    return acc += num;
}
function myReduce2(arr, func, initial) {
    //const result:number=0
    for (const num of arr) {
        initial = (func(initial, num));
    }
    return initial;
}
console.log(myReduce2([1, 2, 3, 4], sum, 0));
export {};
// function myReduce(arr:number[]){
//     let sum=0;
//     for (const num of arr){
//         sum+=num
//     }
//     return sum;
// }
// console.log(myReduce([1,2,3,4]))
