const a = 5;
const b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}

const c = 12;
const d = 2;
const e = 35;

if (c > d & c > e) {
    console.log(c);
}
else if (d > c & d > e) {
    console.log(d);
}
else {
    console.log(e);
}

if (c%2 === 0) {
    console.log(true);
}
else if (c%2 === false) {
    console.log(false);
}
else {
    console.log(0);
}

const f = 30;
const g = 70;
const h = "far";

if (!isNAN(f) || !isNAN(g) || !isNAN(h)) {
    console.log("Isso não é um número. Por favor, digite um número.");
}
else if (f + g + h === 180) {
    console.log(true);
}
else  {
    console.log(false);
}
