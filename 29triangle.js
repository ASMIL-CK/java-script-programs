function triangle(x,y,z){
    // check for equilateral triangle
    if (x == y && y == z) 
        console.log("Equilateral Triangle")

    // check for isosceles triangle

    else if (x == y || y == z || z == x )
        console.log("Isosceles Triangle")

    // otherwise scalene triangle

    else 
    console.log =("Scalene Triangle")

}

console.log(triangle(20,20,20))