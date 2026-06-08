let studentData = {
    name: "Aashmin",
    age: 19,
    city: "Jaipur"
};

console.log(studentData);
console.log(Object.keys(studentData));
console.log(Object.values(studentData));
console.log(Object.entries(studentData));
console.log(studentData.hasOwnProperty("city"));
studentData.course = "B.Tech CSE";
console.log(studentData);
studentData.age = 20;
console.log(studentData);
delete studentData.city;
console.log(studentData);
let studentProfile = {

    name: "Aashmin",

    address: {
        city: "Jaipur",
        state: "Rajasthan"
    }
};
console.log(studentProfile.address.state);
