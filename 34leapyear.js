// check leap year?

function isLeapYear(year) {
    if (year % 100 === 0) {
        return year % 400 === 0;

    }
    return year % 4 === 0;
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2019)); // false

function leapyear(year)
{
    return (year%100 === 0 )? (year%400 === 0) : (year%4 === 0);

}

console.log(leapyear(2020))

