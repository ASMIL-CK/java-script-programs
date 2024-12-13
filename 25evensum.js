// print even number between 1 to 50

for (i=1;i <=50; i++) {
    if (i % 2 == 0)
        console.log(i)
}

// print sum of natural number from 1 to 10

let sum = 0;
for (i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

// print numbers in revers from 50 onwards

// initialize an empty array]

let reversenum =[];

// iterate from 50 to 1 

for (let i = 50; i > 0; i--){
    // add the current number to the array 
    reversenum.push(i);

}

console.log(reversenum);
