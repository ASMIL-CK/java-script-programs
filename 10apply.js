// the javaScript apply() mehod--

// the apply() method is simillar to the call() method.

// In this example the fullname method of person is applied on person:

const person = {
    fullName : function(){
        return this.firstName +" "+ this.lastName;
    }
}

const person1 = {
    firstName:"john",
    lastName:"Doe"
}

// this will return "john Doe":
console.log (person.fullName.apply(person1))

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.



// The apply() Method with Arguments
// The apply() method accepts arguments in an array:

const person5 ={
    fullName: function(city,country){
        return this.firstName +" "+ this.lastName + "," + city + "," + country;
    }
}

const person6 ={
    firstName:"john",
    lastName:"Doe"

}

console.log(person5.fullName.apply(person6,["Oslo","Norway"]))