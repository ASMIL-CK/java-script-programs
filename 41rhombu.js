// rhombus

const n = 5;
let str = '';

for (
    let i = 1; i <=n; i++){
        let row ='';
        for (
            let j = 1; j <= n-i; j++){
                row +=' ';
            }

            for (let j=1; j <= n; j++){
                row += '*';
            }
            str += row + '\n';
        
    }

    console.log(str);

    // hollow rhomus

    const n1 = 5;
    let str1 ='';

    for (let i = 1; i <=n1; i++){
        let row ='';
        for (let j = 1; j <= n1-i; j++){
            row +=' ';
    }

    for (let j = 1; j <= n1; j++){
        if (j === 1 || j === n1 || i === 1 || i === n1) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str1 += row + '\n';
}

console.log(str1);

// mirrored rhombus 

const n3 = 5;
let str3 ='';

for (let i = n3; i >=1; i--){
    let row ='';
    for (let j = 1; j <= n3 - i; j++){
        row +=' ';
    }
    for (let j = 1; j <= n3; j++){
        row += '*';
    }
    str3 += row + '\n';
}

console.log(str3);

// mirrored hollow rhombu 

const n4 = 5;
let str4 ='';

for (let i = 1; i <= n4; i++){
    let row ='';
    for (let j = 1; j < i; j++) {
        row += ' ';
    }

    for (let j = 1; j <= n4; j++){
        if (j === 1 || j === n4 || i === 1 || i === n4){
            row += '*';
        } else{
            row += ' ';
        }
    }
    str4 += row + '\n';
}

console.log(str4);
