const arr = [1, 2, 3, 4, 5, 7, 6, 8]

function greaterThan5(num) {
    return num > 10
}
const num = arr.find(x => x > 5)
// console.log(num);

const divideByThree = arr.some(x => x % 3 === 0)
// console.log(divideByThree);
const dividedByTwo = arr.every(x => x % 2 === 0)
// console.log(dividedByTwo);

const isExistFour = arr.includes(10)
console.log(isExistFour);


