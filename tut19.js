const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const square = [1, 4, 9, 16, 25, 36, 49, 64]
function square(num) {
    // console.log(num);
    
    return num * num
}
const squareArr = arr.map(square)
// console.log(squareArr);

function isEven(num) {
    return num % 2 === 0
}
const evenNumArr = arr.filter(isEven)
// console.log(evenNumArr);


function sumOfNum(acc, curr) {
    console.log(acc, curr);
    
    return acc + curr
}
// acc = 6
// curr = 4
// acc + curr = 10
const sum = arr.reduce(sumOfNum, 0)
console.log(sum);


