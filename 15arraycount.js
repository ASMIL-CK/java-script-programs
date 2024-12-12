// print the count of each item in array

arr=[10,10,20,20,30,30,40,40,50,50,50]

wordcount={}

for(let word of arr){
    if(word in wordcount){
        wordcount[word] += 1

    }else{
        wordcount[Word] = 1
    }

}

console.log(wordcount)