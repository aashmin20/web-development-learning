for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("\n");
// for(let j = 2; j <= 20; j += 2) {
//     console.log(j);
// }
for(let j = 1; j <= 20; j++) {

    if(j % 2 === 0) {
        console.log(j);
    }
}

let num = 5;

for(let i = 1; i <= 10; i++) {

    console.log(num + " x " + i + " = " + (num * i));
}
console.log("\n");
// Sum of Numbers 1 to 10
let sum = 0;

for(let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);