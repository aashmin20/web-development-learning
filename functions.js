// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));

const add =(a,b)=> {
    return a+b;
}
console.log(add(10,20));

// function checkevenodd(num) {

//     if (num % 2 === 0) {
//         return "Even";
//     }

//     return "Odd";
// }

// console.log(checkevenodd(12));

const checkevenodd = (num) => {

    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";
};

console.log(checkevenodd(7));

function calculateAge(byear) {

    return 2026 - byear;
}

console.log(calculateAge(2007));