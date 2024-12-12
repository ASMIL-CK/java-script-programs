// print pairs whos sum=9 from the given array?

arr = [1,2,3,4,5,6,7]
sum = 9
for (let i of arr ){
    for(let j of arr){
        if((i+j)==sum){
            console.log(`the number are, ${1} , ${j}`)
        }
    }
}