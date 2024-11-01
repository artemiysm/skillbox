let x1 = 2, y1 = 3;
let x2 = 10, y2 = 5;

let width = (x2 - x1) < 0 ? (x1 - x2) : (x2 - x1);
let height = (y2 - y1) < 0 ? (y1 - y2) : (y2 - y1);

let area = width * height;

console.log("Площадь прямоугольника:", area);