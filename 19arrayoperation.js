let array = ['sleep','work','exercise'];
let newarray = ['eat'];

// sort 
array.sort();
console.log(array);

// indexof
const position = array.indexOf('work');
console.log("position",position);

// slice
const newwarray = array.slice(1,3);
console.log("slice",newwarray)

// concat
const routine =array.concat(newarray);
console.log("concat",routine);

// splice
const fruits = ["banana","orange","apple","kiwi"].splice(2,2);
console.log(fruits);

// find
abc = [1,2,3,4,5,6,7,8,9,10]
cd = abc.find(e => e < 5)
console.log(cd)

// foreach
abc.array.forEach(element => {
    console.log(element)
n});