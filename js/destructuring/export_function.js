function abc() {
  return "abc";
}

function def() {
  return "def";
}

// how to export these functions ?
//we put it in an object

const obj = { abc: abc, def: def };
// when the key name and vlaue is the same we can write it as one var

const obj2 = { abc, def };

console.log(obj);
console.log(obj2);

/*
{ abc: [Function: abc], def: [Function: def] }
{ abc: [Function: abc], def: [Function: def] }
*/

// we can call the function
console.log(obj.abc()); // abc
