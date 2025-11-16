// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")

const storedUsername = "user123";
const storedPassword = "pass123";

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

if (username === storedUsername && password === storedPassword) {
  console.log("Welcome!");
} else {
  console.log("Invalid credentials.");
}

let weather = prompt("What's the weather like? (sunny/rainy/cold)");


weather = weather.toLowerCase();


if (weather === "sunny") {
  console.log("Wear sunglasses and a t-shirt!");
} else if (weather === "rainy") {
  console.log("Don't forget an umbrella and a raincoat!");
} else if (weather === "cold") {
  console.log("Bundle up with a coat and a scarf!");
} else {
  console.log("Hmm, I don't have a suggestion for that weather.");
}