// // function double(num:number):number{
// //     return(num*2);
// // }

// // function cube(num:number):number{
// //     return (num*num*num);
// // }

// // function myMap(arr:number[], func:(num:number)=>number):number[]{
// //     return(arr.map(num=>func(num)));
// // }


// // function myMap2(arr:number[],func:(num:number)=>number):number[]{
// // let newArr:number[]=[];
// // for (const num of arr){
// // newArr.push(func(num));
// // }
// // return newArr;
// // }
// // console.log(myMap2([1,2,3,4],double));
// // console.log(myMap2([1,2,3,4],cube));

// // // console.log(myMap([1,2,3],double))
// // // console.log(myMap([1,2,3],cube))
// // function isEvens(num:number):boolean{
// //     return (num%2===0)
// // }

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





// // console.log(myfilter2([1,2,3,4,6,8],isEvens));
// // console.log(myfilter2([1,2,3,-1,-2,6,7,8],greaterNum));

// // function reducedSum(arr:number[]):number{
// // return arr.reduce((accu,curr)=>
// //     accu+=curr
// // ,0)
// // }

// // console.log(reducedSum([1,2,3,4]));

// function sum(acc:number,num:number):number{
//     return acc+=num
// }

// function myReduce2(arr:number[],func:(acc:number,num:number)=>number,initial:number):number{
//     //const result:number=0
//     for (const num of arr){
//         initial=(func(initial,num))
//     }
   
// return initial;
// }
// console.log(myReduce2([1,2,3,4],sum,0))



// // function myReduce(arr:number[]){
// //     let sum=0;

// //     for (const num of arr){
// //         sum+=num
// //     }
// //     return sum;
// // }
// // console.log(myReduce([1,2,3,4]))




/**
 * Factory function that builds and returns a bank object.
//     The bank object
//  */
// export function makeBank() {
//     const transactionsDB = [];
  
//     const bank = {
//       getBalance(id) {
//         const customer = transactionsDB.find((customer) => customer.customerId === id);
//         let balance = 0;
//         for (const trans of customer.customerTransactions) {
//           balance += trans;
//         }
//         return balance;
//       },
  
//       bankBalance() {
//         let total = 0;
//         for (const trans of transactionsDB) {
//           total += this.getBalance(trans.customerId);
//         }
//         return total;
//       },
//     };
  
//     return bank;
//   }
  
//   // Example usage
//   const bank = makeBank();
//   bank.transactionsDB = [
//     { customerId: 1, customerTransactions: [10, 50, -40] },
//     { customerId: 2, customerTransactions: [10, 10, -10] },
//     { customerId: 3, customerTransactions: [5, -5, 55] }
//   ];
  
//   console.log(bank.bankBalance()); // Output: 80
const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
type Player={
    jersey:number,
    stats:{
        game:number,
        points:number
    }[]
}

function findHighScore(teamStats:Player[]):{jersey:number,high:number}[]{
    let high=0;
    return teamStats.map(player=>{
        for(const stats of player.stats){
            if (stats.points> high){
                high=stats.points
            }
        }
        return ({jersey:player.jersey,high:high})
    })

}
console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));