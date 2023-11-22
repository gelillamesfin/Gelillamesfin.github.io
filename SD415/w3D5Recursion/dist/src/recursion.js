export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, sumTreeValues };
function sumTo(n) {
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return (num - 1) + fibonacci(num - 2);
    }
}
