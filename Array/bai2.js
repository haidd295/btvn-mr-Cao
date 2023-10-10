let data = [1, 3, 2, 4, 5];

data = data.sort((a, b) => a - b);
let max = data.slice(1);
let min = data.slice(0, -1);
console.log(min, max);