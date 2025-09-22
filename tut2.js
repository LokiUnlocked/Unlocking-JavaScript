// var
var name = "Abhishek"
// var address = "India"
// var address = "Canada" // redeclaration
// // console.log(address);

// address = "USA" // reassign
// // console.log(address);

// {
//     var lastName = "Gupta"
//     // console.log(lastName);
//     address = "NewYork"

// }
// // console.log("outside block", lastName);
// // console.log(address);

// function fn() {
//     var fullName = "Lokendra Gupta"
//     console.log(fullName);

// }

// fn()
// console.log("outside fn", fullName);


// let

let address = "India"
// let address = "USA"
// address = "Canada"
{
    // let address = "USA"
    address = "Canada"
    // console.log(address);

}
// console.log("outside block", address);

// const

const pi = 3.14
// pi = 3 cannot reassign constant variable
// const pi = 3
{
    const pi = 3
    // console.log(pi);

    // pi = 3 // not possible
}
// console.log("outside block", pi);
{
    var name = "Umang"
}