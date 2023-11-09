// function computeSalesCommission(employeType: Boolean, sales: number): number {
//   let commission = 0;
//   if (employeType) {
//     if (sales < 300) {
//       return (commission = 0);
//     } else if (sales >= 300) {
//       return (commission = sales * 0.01);
//     } else if (sales > 500) {
//       return (commission = 500 * 0.01 + (sales - 500) * 0.02);
//     }
//   } else {
//     if (sales < 300) {
//       return (commission = 0);
//     } else if (sales <= 500) {
//       return (commission = sales * 0.01);
//     } else {
//       if (sales > 500) return (commission = 500 * 0.02 + (sales - 500) * 0.03);
//     }
//   }
//   return NaN;
// }
export function computeSalesCommission(salaried, salesAmount) {
    if (salesAmount < 300) {
        return 0;
    }
    else if (salaried) {
        if (salesAmount <= 500) {
            return salesAmount * 0.01;
        }
        else {
            return 500 * 0.01 + (salesAmount - 500) * 0.02;
        }
    }
    else {
        if (salesAmount <= 500) {
            return salesAmount * 0.02;
        }
        else {
            return 500 * 0.02 + (salesAmount - 500) * 0.03;
        }
    }
}
