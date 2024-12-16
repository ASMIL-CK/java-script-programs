// a pallindromee is a number that reads the same forward and backward
// for example 12321 , 121 , malayalam , 4554  is a pallindrome

function vaildatePalin(str){
    str = str.toString(); // convert to string if input is not a string 
    const len = str.length;



for(let i = 0; i < len / 2; i++){
    if(str[i] !== str [len - 1 - i]){
        console.log(str + 'is not a pallindrome');
        return ;


    }
}
console.log(str + 'is a pallindrome');
}
vaildatePalin(121); //call the function