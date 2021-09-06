function sum(obj) {
  console.log(`the name is ${obj.name}, the age is ${obj.age}`);
}

// rather than doing obj.name we can directly use the var name is we destructure the object , makes the
//code cleaner and easier to understand

//destrcuture func params
function sum1({ name, age }) {
  console.log(`the name is ${name}, the age is ${age}`);
}
let personOne = {
  name: "rhea",
  age: 5,
};

sum(personOne); //the name is rhea, the age is 5
sum1(personOne); //the name is rhea, the age is 5

/*
We can return multiple paramteres using drsturctuing 
*/

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

function sumAndMultiply1(a, b) {
  return { sum: a + b, multiply: a * b };
}

//default values
let [additon, multiply, division = "no division"] = sumAndMultiply(2, 3);
console.log(`the sum is ${additon} and ${multiply}`); // sum is 5 and 6
console.log(division); // no division

let { sum: addition, multiply: multiplication } = sumAndMultiply1(1, 3);
console.log(addition, multiplication); // 4,3
