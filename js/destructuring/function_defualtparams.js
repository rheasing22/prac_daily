//Function Default Parameters
function abc(a, b, c = 0) {
  console.log(a, b, c);
  console.log(a + b + c);
}

abc(3, 4); // 9
abc(3, 4, 9); //15
