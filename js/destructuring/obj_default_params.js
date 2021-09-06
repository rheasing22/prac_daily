let options = {
  title: "Menu",
  width: 100,
};

let { title, width = 50, height = 100 } = options;

console.log(title, width, height); //Menu 100 100
