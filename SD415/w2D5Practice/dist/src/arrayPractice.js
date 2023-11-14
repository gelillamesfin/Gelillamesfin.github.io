export function doubleNums(arr) {
    let doubled = arr.map((num) => num * 2);
    return doubled;
}
export function doubleAges(arr) {
    let doubledAge = arr.map((Person) => Person.age * 2);
    return doubledAge;
}
export function filterEven(arr) {
    let filtered = arr.filter(num => num % 2 == 0);
    return filtered;
}
export function filterOver10(arr) {
    const over100 = arr.filter(num => num > 100);
    return over100;
}
export function findEvenNum(arr) {
    let firstEven = arr.find(num => num % 2 == 0);
    return firstEven;
}
export function findEvenAge(people) {
    return (people.find((person) => person.age % 2 === 0));
}
export function includesEvenNum(arr) {
}
export function includesEvenAge(arr) {
}
