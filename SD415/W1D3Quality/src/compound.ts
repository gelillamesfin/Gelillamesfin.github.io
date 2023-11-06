// export function compoundCalc(deposit: number, rate: number, years: number) {
//   const monthlyRate = rate / 12 / 100;
//   const numPayments = years * 12;
//   let balance = deposit;
//   for (let i = 1; i <= numPayments; i++) {
//   balance = balance + balance * monthlyRate;

//   }
//   return balance;
//  }


export function getSavingBalance(currentBalance:number, annualRate:number, years:number):number {
  let futureAmount:number =0;
  annualRate = 10;
  currentBalance = 100;
  years = 1;
  let months = years * 12;
  let monthlyR = annualRate / 12;
  for (let i = 1; i <= months; i++)
    futureAmount = (futureAmount + currentBalance) * (1 + monthlyR)
       futureAmount.toFixed(2);
    

      
return(futureAmount);
}


