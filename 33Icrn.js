// find least common Multiple LCM

gcd = (a,b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

lcm=(a,b) => {
    return a*b /gcd(a,b);
}

console.log(lcm(4,5));
console.log(lcm(8,15));
