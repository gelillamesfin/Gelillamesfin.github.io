// function add(a: number, b: number): number {
//   return a + b;
// }
// const sum1: number = add(10, 15);
// const sum2: number = add("ten", 5);
// console.log("sum1 is: ", sum1, " sum2 is: ", sum2);
function computeSalesCommission(employeType: Boolean, sales: number): number {
  let commission = 0;
  if (employeType) {
    if (sales < 300) {
      return (commission = 0);
    } else if (sales >= 300) {
      return (commission = sales * 0.01);
    } else if (sales > 500) {
      return (commission = 500 * 0.01 + (sales - 500) * 0.02);
    }
  } else {
    if (sales < 300) {
      return (commission = 0);
    } else if (sales >= 300 || sales <= 500) {
      return (commission = sales * 0.01);
    } else {
      if (sales > 500) return (commission = 500 * 0.02 + (sales - 500) * 0.03);
    }
  }
  return NaN;
}
console.log(computeSalesCommission(false, 3500));
