// • Write code to create an array named scores and fill it with 5 test scores 10, 
// 20, 30, 40 and 50.
// function arrayPract(scores:number):{
//   scores=[10,20,30,40,50]
// }

let scores:number[]=[10,20,30,40,50];

// Now write a function named findAverage, that takes an array as an 
//argument and return average of the array values.
function findAverage(average:number []):number{
  let sum=0;
  for(let i=0;i<average.length;i++){
    sum+=average[i]
  }
  return (sum/average.length);

}
console.log(findAverage(scores));


// let scores:number[]=[10,20,30,40,50];

// // Now write a function named findAverage, that takes an array as an 
// //argument and return average of the array values.
// function findAverage(average:number []):number{
//   let sum=0;
//   for(let i=0;i<average.length;i++){
//     sum+=average[i]
//   }
//   return (sum/average.length);

// }
// console.log(findAverage(scores));


function computeCharges(charges: number[][]): number[][] {
  const result: number[][] = [];

  for (const customer of charges) {
    if (customer.length === 0) {
      // Handle the case where a customer has no charges.
      result.push([0, 0, 0]);
    } else {
      let minCharge = customer[0];
      let maxCharge = customer[0];
      let sumCharge = 0;

      for (let i = 0; i < customer.length; i++) {
        const charge = customer[i];

        // Calculate the minimum charge
        if (charge < minCharge) {
          minCharge = charge;
        }

        // Calculate the maximum charge
        if (charge > maxCharge) {
          maxCharge = charge;
        }

        // Calculate the sum of charges
        sumCharge += charge;
      }

      const avgCharge = sumCharge / customer.length;

      result.push([minCharge, maxCharge, avgCharge]);
    }
  }

  return result;
}

// Example usage:
const customerCharges: number[][] = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 60],
  [300, 200, 100],
];

const results: number[][] = computeCharges(customerCharges);
console.log(results);
