// function to convert celsius to fahrenheit

function celsiusTofahrenheit(celsius){
    var fahrenheit = celsius * 9 /5 + 32;
    return fahrenheit;
}

console.log(celsiusTofahrenheit(9))

// function to convert fahrenheit to celsius

function fahrenheitTocelsius(fahrenheit){
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(fahrenheitTocelsius(178))