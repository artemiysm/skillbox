
let a = 13.123456789;
let b = 2.123;
let n = 5;

let A = Math.floor((a % 1) * Math.pow(10, n));
let B = Math.floor((b % 1) * Math.pow(10, n));

console.log("Дробная часть a:", A);
console.log("Дробная часть b:", B);

console.log("a > b:", A > B);
console.log("a < b:", A < B);
console.log("a >= b:", A >= B);
console.log("a <= b:", A <= B);
console.log("a === b:", A === B);
console.log("a !== b:", A !== B);