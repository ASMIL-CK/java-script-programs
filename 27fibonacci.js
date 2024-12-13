// print fibonacci series?

function printFibonacci(n){
    let num1 = 0 ;
    let num2 = 1;
    let result ="";

    for(let i = 1; i <=n; i++){
        result += num1 + " " ;
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    console.log(result);
}

printFibonacci(10);