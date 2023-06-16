// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const numbersUntil = (until)=>Array.from({
        length: until
    }, (_, index)=>index);
const numbersUntilX = numbersUntil(10100000);
const nope = [
    2,
    3,
    7,
    8
];
let found = false;
for (const num of numbersUntilX){
    const numPowTwo = num ** 2;
    const lastDigitNumPowTwo = numPowTwo.toString().slice(-1);
    if (nope.includes(+lastDigitNumPowTwo)) {
        console.log(`Eureka: ${num} (${numPowTwo})`);
        found = true;
    }
}
if (found) {
    console.log(`Congratulations, you found a number raised to the square that ends in 2,3,7 or 8.`);
} else {
    console.log(`You didn't find any number raised to the square that ends in 2,3,7 or 8.`);
}
