const fruits = ["apple", "banana", "grapes", "blueberry"]
// console.log(fruits.length);

const cars = new Array("BMW", "Audi", "Suzuki")
cars[2] = "Tesla"
// console.log(cars.length);

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
    
// }

for(let car of cars) {
    console.log(car);
    
}
