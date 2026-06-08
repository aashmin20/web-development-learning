// practice
var myname = "Aashmin";
var year ="2nd year";
var temp = `${myname} is her name and she is in ${year}`;
console.log(temp);

// first occurence of 
var string = "this is a new topic";
var position = string.indexOf('is');
console.log(position);

// last occurence of 
var string = "this is a new topic";
var position = string.lastIndexOf('is');
console.log(position);

// slicing
var string = "this is a new topic";
console.log(string);
var substr = string.slice(5,14);
console.log(substr);

// slice-> can take negative values as well
// substring-> can't take negative values
// substr-> 1 argument is start from and 2nd argument is length
var substr1 = string.substr(3,10);
console.log(substr1);


let course = "Javascript";
console.log(course.length);
console.log(course.toUpperCase());
console.log(course.toLowerCase());
console.log(course.trim()); //removes spaces from beginning and end and nt from middle
console.log(course.includes('u')); //for both character and word
console.log(course.startsWith('j')); //case sensitive
console.log(course.startsWith(' '));
console.log(course.endsWith('t'));
console.log(course.replace('Javascript','Html'));
let names = "Aashmin reet sia yashi deep";
console.log(names);
console.log(names.split(" "));// converts string into array
console.log(names.slice(8,20));
console.log(names.slice(-17));




