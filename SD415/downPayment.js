// Make a defining table and then write a function that calculates down payment for a home loan based on
// following rules. Your function should have a parameter for the cost and return the down payment
// amount.Cost of House Down Payment
// $0 to less than 50K 5% of the cost
// $50K to less than 100K $2500 + 10% of (cost - $50K)
// $100K to less than 200K $7500 + 15% of (cost - $100K)
// $200K and above $20000 + 10% of (cost - $200K)
// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 25000: ", calcDownpayment(250000));

function houseCost(cost) {
  //cost = +prompt("enter the cost: ");
  let downPayment;
  if (cost < 50000) {
    return (downPayment = cost * 0.05);
  } else if (cost >= 50000 && cost < 100000) {
    return (downPayment = 2500 + 0.1 * (cost - 50000));
  } else if (cost >= 100000 && cost < 200000) {
    return (downPayment = 7500 + 0.15 * (cost - 100000));
  } else if (cost >= 200000) {
    return (downPayment = 20000 + 0.1 * (cost - 200000));
  }
}
console.log(houseCost(40000));
console.log(houseCost(50000));
console.log(houseCost(100000));
console.log(houseCost(250000));
