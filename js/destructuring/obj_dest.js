let options = {
  title: "menu",
  width: 100,
  height: 200,
};

//how to access the values in the object

console.log(options.title); //menu
console.log(options.width); //100
console.log(options.height); // 200

// to make it cleaner we can use destructuring

const { title, width, height } = options;
console.log(title, width, height); // menu 100 200
