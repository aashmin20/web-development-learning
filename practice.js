// let a=[20,1,3,5];
// let b=a.slice(1,3);
// console.log(b);

// let c=["sgnr","pilani","delhi"];
// console.log(c.indexOf("delhi"));

// let myname = "  Aashmin. ";
// console.log(myname.trim());
// console.log(myname.toLowerCase());

// let obj ={
//     myname: "ASh",
//     age:19,
//     city:"sgnr"
// }
// obj.course = "btech";
// console.log(obj);
// delete obj.myname;

let string = "Ash sia yashi";
console.log(string.split(" ").reverse().join(" "));

let reverse =" ";
for(let i=string.length-1; i>=0;i--){
    reverse = reverse+ string[i];
}
console.log(reverse);