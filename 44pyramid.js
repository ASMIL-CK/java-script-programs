//  pyramid

const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
    row += '*';
    }
    str += row + '\n';
}
console.log(str);

// inveid pyramid

const n1 = 5;
let str1 = '';

for (let i = n1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n1 - i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
    row += '*';
    }
    str1 += row + '\n';
}
console.log(str1);

// hollow pyramid pattern program





