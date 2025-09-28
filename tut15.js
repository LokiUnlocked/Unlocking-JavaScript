// function outer() {
//     const a = 10
//     function inner() {
//         console.log(a);
        
//     }
//     inner()
// }

// outer()

function outer() {
    const a = 10
    function inner() {
        console.log(a);
        
    }
    return inner
}

const fn = outer()
fn()