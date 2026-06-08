let cities = ['jaipur','sgnr','sonipat','panipat','pilani'];
console.log(cities);
console.log(cities.push('malout'));
console.log(cities);
console.log(cities.pop());
console.log(cities);
console.log(cities.shift());
console.log(cities.unshift('delhi'));
console.log(cities);
console.log(cities.includes('Sonipat')); //case sensitive
console.log(cities.includes('sonipat'));
console.log(cities.indexOf('sonipat')); //-1 means nt in array

let newcities = cities.slice(3,6);
console.log(newcities);

let c = ['raj','punj','uk','up'];
console.log(c);
let c1=c.splice(1,2); //starting from index 1 removes 2 elements
console.log(c1);
c.splice(1,0,"ap"); //splice returns removed elements
console.log(c);
c.splice(1,1,"haryana");
console.log(c);
console.log(c.join("_"));
c.reverse();
console.log(c);
c.sort();
console.log(c);//sort alphabetically 

let stateNames = [
    "Jaipur",
    "Delhi",
    "Mumbai",
    "Pune",
    "Chennai"
];

stateNames.push("Bangalore");

stateNames.pop();

stateNames.shift();

console.log(stateNames.includes("Delhi"));

console.log(stateNames.indexOf("Mumbai"));

let selectedStates = stateNames.slice(1, 3);

console.log(selectedStates);

stateNames.splice(1, 1, "Kolkata");

console.log(stateNames);

stateNames.sort();

console.log(stateNames);

stateNames.reverse();

console.log(stateNames);

console.log(stateNames.join(" - "));