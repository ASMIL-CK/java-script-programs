// calculate the average value of the square numbers in an array 

let num =[25,45,55,77,88,99];

const square = num.map(num=> num * num );
console.log(square);
let average=square.reduce((acc,cur) => acc + cur, 0)/num.length;
console.log("average:"+ average );