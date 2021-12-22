/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);

// console.log(sum);
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(4, 2)
console.log(sum2)

// Implicit Returns

const sayHello = message => console.log(message);
sayHello("Hello There!")

const helloMsg = () => console.log("Hello");
helloMsg();

// Returning Multiple Lines

const returnMultiLine = () => (
    `<p>
        Hello from Multiline
    </p>`
)
console.log(returnMultiLine())
// node arrow-functions.js
