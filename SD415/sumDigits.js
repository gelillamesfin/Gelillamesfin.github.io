function sumDigits(number) {
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}
console.log(sumDigits(1234));
