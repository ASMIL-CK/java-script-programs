// square star pattern program

const n = 5;
let str ="";

for (let i = 1; i <= n; i++){

    for(let j = 1; j <= n; j++ ){
        str += "* ";

    }
    str +="\n"; // add new line 
} 

// print the star pettern
console.log(str);

// Hollow square star pattern program

const m =5;
let strr ='';
for (let i = 1; i <= m; i++){
    for (let j = 1; j <= m; j++){
        if (i == 1 || i == m || j == 1 || j == m){
            strr += "* ";
        }else{
            strr += "  ";
        }

    }
    strr += '\n';
}
console.log(strr);