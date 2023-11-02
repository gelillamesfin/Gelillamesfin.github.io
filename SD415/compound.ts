// import { assert } from "chai";

// function compoundCalc(deposit: number, rate: number, years: number):number {
//   const monthlyRate = rate / 12 / 100;
//   years=0;
//   const numPayments = years * 12; 
//   let balance = deposit;
//   for (let i = 1; i <= numPayments; i++) {
//   balance = balance + balance * monthlyRate;
 
//   }
//   return balance;
//  }


// function getSavingBalance() {
//   let futureAmount = 0;
//   let annualRate = 10;
//   let currentBalance = 100;
//   let years = 1;
//   let months = years * 12;
//   let monthlyR = annualRate / 12;
//   for (let i = 1; i <= months; i++)
//     futureAmount = (futureAmount + currentBalance) * (1 + monthlyR);
//   return futureAmount.toFixed(2);
// }
// console.log(getSavingBalance());