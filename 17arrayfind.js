var employee = {
    id:100,
    Name:"karthika",
    designation:"full stack developer",
    salary:50000,
    exp:1
}

// select a property value?
console.log(employee.Name)

// Add a property?
employee['gender'] = 'female'
console.log(employee);

// end result display?
for(let emp in employee){
    console.log(`${emp}:${employee[emp]}`)
}