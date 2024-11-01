let n = -10;
let m = 5;
let min = Math.min(n, m);
let max = Math.max(n, m);

let random1 = (Math.random() * (max - min + 1)) + min | 0;
let random2 = (Math.random() * (max - min + 1)) + min | 0;

console.log("Случайное число 1:", random1);
console.log("Случайное число 2:", random2);

console.log("random1 > random2:", random1 > random2);
console.log("random1 < random2:", random1 < random2);
console.log("random1 >= random2:", random1 >= random2);
console.log("random1 <= random2:", random1 <= random2);
console.log("random1 === random2:", random1 === random2);
console.log("random1 !== random2:", random1 !== random2);