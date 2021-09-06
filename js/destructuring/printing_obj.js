let obj = { a: 1, b: 2 };

/*
we can print an object using for in 
obj.key gives undefined because it is searching for the exact key name 'key' which is not present 

*/
//for in

for (let key in obj) {
  console.log(key, obj[key]);
}

//it will search for key exact name in obj , which is not present thus -> undefined
for (let key in obj) {
  console.log(key, obj.key);
}

// this is alllowed as a is an actual key name
for (let key in obj) {
  console.log(key, obj.a);
}

/*

a 1
b 2
a undefined
b undefined
a 1
b 1

*/

/*
we can get the obj and key values like this 

*/
console.log(Object.keys(obj));
console.log(Object.values(obj));
