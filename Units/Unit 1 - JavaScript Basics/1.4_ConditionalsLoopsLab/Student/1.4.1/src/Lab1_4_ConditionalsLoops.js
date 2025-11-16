/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
if (age <=16){
console.log("Teenager Discount");
} else if (age >= 85) {
    console.log("Senior discount")
} else {
    console.log("No discount")
}

// TODO 2: Nested if with two numbers
let a = 1
let b = 2
if(a<b) {
    console.log("a is less than b")
} else (a>b) {
    console.log('a is greater than b')
}
    
// TODO 3: Switch statement for language greeting
let language = "hello";
switch (language) {
    case "greetings":
        console.log("hello")
        break;
    case "giving":
        console.log("here...")
}

 let ticker = "APPL"

 switch (ticker){
    case "APPL":
    case "NVDA":
    case "META":
        console.log(" $(ticker) is a TECH stock")
 }
// TODO 4: While loop (1 to 10)
let score = 0
while (score < 10) { 
    score ++
    console.log("score ", score)
}
// TODO 5: Do..while loop (1 to 5)
let count = 0
do {
    if (count % 10 == 0) {
        console.log("Count: ", count)
        count++;
    } else {
        count++;
    }
} while (count <= 100)
// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let i =1; i , 20, i++;); {
    if (i == 10) {
        console.log("ten")
    } else if (i === 20)
        console.log("twenty")
}
// TODO 7: Even/Odd loop (1 to 20)
for (let i =1; i <=20, i++;) {
    if (i % 2 === 0) {
        console.log("i is even")
    } else
        console.log("i is odd")
}
// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
