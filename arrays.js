let technologies = ["html", "js","python","css","c"];
console.log(technologies);

technologies.push("c++");
console.log(technologies);
technologies.unshift("java");
console.log(technologies);
technologies.pop();
console.log(technologies);
technologies.shift();
console.log(technologies);
console.log(technologies.length);

for(let i=0;i<technologies.length;i++){
    console.log(technologies[i]);
}