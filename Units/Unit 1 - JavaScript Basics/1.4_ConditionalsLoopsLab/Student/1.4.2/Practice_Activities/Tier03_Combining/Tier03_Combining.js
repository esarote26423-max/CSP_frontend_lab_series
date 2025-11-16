// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 3")
function isPrime(n) {
  if (n < 2) return false;          
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;   
  }
  return true;
}


for (let n = 1; n <= 20; n++)
  if (isPrime(n)) {
    console.log(n + " -> prime");
  } else if (n % 2 === 0) {
    console.log(n + " -> even");
  } else {
    console.log(n + " -> odd");
  }

  for (let row = 1; row <= 4; row++) {
  let line = "";

  for (let i = 0; i < row; i++) {
    line += "*";
  }

  console.log(line);
}