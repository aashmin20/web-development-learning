// 1.Create a greeting message using template literals.
function greet(name){
    return `hello ${name}, good morning!`;
}
console.log(greet("Ash"));

// 2.Convert a normal function into an arrow function.
// normal func
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));

// arrow func
let add =(a,b)=>{
    return a+b;
};
console.log(add(10,40));

// 3.Destructure values from an object.
let student={
    name:"Ash",
    age:19
};
let {name,age}=student;
console.log(name);
console.log(age);

// 4.Destructure values from an array.
let technologies=["html","css","js"];

let [first,second,third]=technologies;
console.log(first);

// 5. Create a Copy of an Array Using Spread Operator
let copiedtechnologies = [...technologies];
console.log(copiedtechnologies);

copiedtechnologies.push("java");
console.log(copiedtechnologies);
console.log(technologies);

// 6. Merge Two Arrays Using Spread Operator
let arr1=[1,2];
let arr2=[3,4];
let num=[...arr1,...arr2];
console.log(num);

// 7. Merge Two Objects Using Spread Operator
let obj1={name:"ash"};
let obj2={age:19};
let fnl={
    ...obj1,...obj2
};
console.log(fnl);

// 8. Create a Function Using Default Parameters
function greet(user="guest"){
    return `welcome ${user}`;
}
console.log(greet());

// 9. Create a Function Using Rest Parameters
function show(...numbers){
    return numbers;
}
console.log(show(10,20,30,40));

// 10. Find Sum of Multiple Numbers Using Rest Parameters
function calc(...numbers){
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total+=numbers[i];
    }
    return total;
}
console.log(calc(10,20,30));

console.log(calc(5,5,5,5));