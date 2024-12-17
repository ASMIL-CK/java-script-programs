// function to calculate simple interest

function interestO(principle , time , rete){
    //calculate simple ineterst using the formula:
    let simpleInterest = (principle * time * rete) / 100;

    // print the result
    console.log("simple Interest is: ", simpleInterest);
}

// call the function with sample values 
interestO(1000,2000,5);//Assuming rate is 5%
