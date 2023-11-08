// // function add(a: number, b: number): number {
// //   return a + b;
// // }
// // const sum1: number = add(10, 15);
// // const sum2: number = add(10, 5);
// // console.log("sum1 is: ", sum1, " sum2 is: ", sum2);

// // function calcPromotion() {
// //   let employeType = prompt("enter s for salary and n for not salaried");
// //   let commission;
// //   let sales = +prompt("enter your sales total ");

// //   if (employeType == "s") {
// //     if (sales < 300) {
// //       return (commission = 0);
// //     } else if (sales >= 300 && sales < 500) {
// //       return (commission = sales * 0.01);
// //     } else if (sales >= 500) {
// //       return (commission = sales * 0.02);
// //     }
// //   } else if (employeType == "n") {
// //     if (sales >= 300 && sales < 500) {
// //       return (commission = sales * 0.02);
// //     } else if (sales >= 500) {
// //       return (commission = sales * 0.03);
// //     }
// //   }
// // }
// // calcPromotion();

// // console.log("expect 0: ", calcPromotion(true, 200));
// // console.log("expect 0: ", calcPromotion(false, 200));
// // console.log("expect 3: ", calcPromotion(true, 300));
// // console.log("expect 6: ", calcPromotion(false, 300));
// // console.log("expect 65: ", calcPromotion(true, 3500));
// // console.log("expect 100: ", calcPromotion(false, 3500));
// // function compoundInterest(deposit: number, rate: number, years: number) {
// //   const monthlyRate = rate / 12 / 100;
// //   const numPayments = years * 12;
// //   let balance = deposit;
// //   for (let i = 1; i <= numPayments; i--) {
// //     balance = balance + balance * monthlyRate;
// //     debugger;
// //   }
// //   return balance;
// // }
// // console.log("expect 110.47", compoundInterest(100, 10, 1));
// // console.log("expect 16470.09", compoundInterest(10000, 5, 10));

// //suppose have many functions to test and want tests in separate file
// import { assert } from "chai";
// /* import from functions.ts module-- note the .js extension (even though actual file is .ts */
// import { checkPrime, ssReverse } from "../src/functions.js";
// describe("checkPrime returns true if argument is prime ", function () {
//   it("37 is prime", function () {
//     assert.strictEqual(checkPrime(37), true);
//   });
//   it(" 77 is not prime", function () {
//     assert.strictEqual(checkPrime(77), false);
//   });
// });
// describe("ssReverse", function () {
//   it("[1, 2, 3, 4]", function () {
//     //test array equality
//     assert.deepStrictEqual(ssReverse([1, 2, 3, 4]), [4, 3, 2, 1]);
//   });
// });
