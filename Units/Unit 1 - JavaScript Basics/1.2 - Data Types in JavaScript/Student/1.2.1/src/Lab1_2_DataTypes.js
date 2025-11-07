/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
const age = 34;
console.log(age);
const price = 12.99;
console.log(price); 
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
let name1 = "Sandra" / 2;
console.log(whatIsThis);

// TODO 2: Print basic math ops: + - * /
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);
console.log(2 ** 3);
console.log(7 % 2);

// TODO 3: Assignment operators with score variable
let score = 10;
score += 5;
console.log(score)
// TODO 4: Expressions with operator precedence
let result = ((7 + 5) / 3) - 8;
console.log(result);
// TODO 5: Strings (single, double, backticks)
console.log('Mr.Explorer')
console.log("Mr. Explorer")
console.log9(`Mr.Explorer`)

let name2 = "Mr. Explorer"
let age2 = (2025 - 1958)
console.log("Hello my name is ${name2} and I am ${age2} years old");
// TODO 6: String properties and methods
let greeting = "Hello there!";
// - greeting.length
console.log("greeting length: " + greeting.length)
// - charAt(0), charAt(5), [3]
console.log(greeting.charAt(0))
console.log(greeting.charAt(0))
console.log(greeting[3])
// - indexOf("sad")
let phrase = "Don't be sad, be happy"
console.log(phrase.indexOf("sad"))
// - repeat()
console.log("la".repeat(5))
// - substring, substr, slice examples
console.log(phrase.substring(0, 3))
console.log(phrase.substr(0,3))
console.log(phrase.slice(-23, -21))
// 🚀 Stretch Goals
// - Even number check using %
for (let i = 1; i < 10; i++){
    if(i % 2 == 0){}
        console.log(`The answer ${i} is even')
    ]
}
// - localeCompare() example
console.log("apple".localeCompare("banana"))