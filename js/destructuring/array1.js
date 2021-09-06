alpha = ["A", "B", "C", "D", "E", "F"];
numbers = ["1", "2", "3"];

let [a, b] = alpha;
console.log(a, b); // 'A' ,'B'

//skip the second element and have only a and c
[a, , c] = alpha;
console.log(a, c);

//using the spread operator to get the rest of the array
[a, b, c, ...rest] = alpha;
console.log(a); //A
console.log(b); //B
console.log(c); //C
console.log(rest); // ["D", "E", "F"]

//combine two arrays, alternative to concat
const newArray = [...alpha, ...numbers];
console.log(newArray); // ["A", "B", "C", "D", "E", "F","1", "2", "3"]

const concatarray = alpha.concat(numbers);

console.log(newArray == concatarray); // not equal -> false
//why ??

//spread operator on string- > splits the string we get each alphabet
string1 = "rhea";
console.log(...string1);
