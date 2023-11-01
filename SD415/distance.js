// Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
// between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5))
function yxDistance(x, y, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
}
console.log(yxDistance(0, 0, 5, 5).toFixed(2));