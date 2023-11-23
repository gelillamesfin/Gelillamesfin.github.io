//export   { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues}
export { sumTo, factorial, fibonacci };
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
// type TreeNode = {
//     value: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
// }
