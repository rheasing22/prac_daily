let options = {
  title: "menu",
  width: 100,
  height: 200,
};

//confict of variables
//title = "something"; //Cannot access 'title' before initialization-->var title
//const { title, width, height } = options;
//let title = "something"; //SyntaxError: Identifier 'title' has already been declared
//console.log(title, width, height); // menu 100 200

/*let { title, width, height } = options;
title = "something";
console.log(title, width, height); //something 100 200
*/

/* alising to avoid conflic*/
let title = "something";
let { title: t, width, height } = options;

console.log(title, t, width, height); //something menu 100 200
