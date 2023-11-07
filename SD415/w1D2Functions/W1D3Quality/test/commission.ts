// import { assert } from "chai";
// // function computeSalesCommission(employeType: boolean, sales: number): number {
// //   //let employeType = prompt("enter s for salary and n for not salaried");
// //   let commission = 0;
// //   //let sales = +prompt("enter your sales total ");

// //   if (employeType) {
// //     if (sales < 300) {
// //       return (commission = 0);
// //     } else if (sales >= 300 && sales < 500) {
// //       return (commission = sales * 0.01);
// //     } else if (sales >= 500) {
// //       return (commission = sales * 0.02);
// //     }
// //   } else {
// //     if (sales >= 300 && sales < 500) {
// //       return (commission = sales * 0.02);
// //     } else if (sales >= 500) {
// //       return (commission = sales * 0.03);
// //     }
// //   }
// //   return NaN;
// // }
// // console.log(computeSalesCommission(true, 1000));
// // function computeSalesCommission(employeType: Boolean, sales: number): number {
// //     let commission = 0;
// //     if (employeType) {
// //       if (sales < 300) {
// //         return (commission = 0);
// //       } else if (sales >= 300) {
// //         return (commission = sales * 0.01);
// //       } else if (sales > 500) {
// //         return (commission = 500 * 0.01 + (sales - 500) * 0.02);
// //       }
// //     } else {
// //       if (sales < 300) {
// //         return (commission = 0);
// //       } else if (sales >= 300 || sales <= 500) {
// //         return (commission = sales * 0.01);
// //       } else {
// //         if (sales > 500) return (commission = 500 * 0.02 + (sales - 500) * 0.03);
// //       }
// //     }
// //     return NaN;
// //   }
// //   console.log(computeSalesCommission(false, 3500));

// function computeSalesCommission(salaried: boolean, salesAmount: number): number {
//   if (salesAmount < 300) {
//     return 0;
//   } else if (salaried) {
//     if (salesAmount <= 500) {
//       return salesAmount * 0.01;
//     } else {
//       return 500 * 0.01 + (salesAmount - 500) * 0.02;
//     }
//   } else {
//     if (salesAmount <= 500) {
//       return salesAmount * 0.02;
//     } else {
//       return 500 * 0.02 + (salesAmount - 500) * 0.03;
//     }
//   }
// }

// describe("test of ComputSalesCommission", function () {
//   it("tests salaried and 200 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 200), 0);
//   });
//   it("tests not salaried and 200 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 200), 0);
//   });
//   it("tests salaried and 300 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 300), 3);
//   });
//   it("tests not salaried and 300 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 300), 6);
//   });
//   it("tests salaried and 3500 sales", function () {
//     assert.strictEqual(computeSalesCommission(true, 3500), 65);
//   });
//   it("tests not salaried and 3500 sales", function () {
//     assert.strictEqual(computeSalesCommission(false, 3500), 100);
//   });
// });
