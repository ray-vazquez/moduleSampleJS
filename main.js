// at the top of the file we create a variable for a require statement to import a function from file. the file name does not need the .js extention
const filter = require("./filter");
const add = require("./filter");

const things = ["teddy", "ball", "hat", "tree", "ballon"];


//using the variables we created above, we can access the function names like accessing object properties
const filteredList = filter.filterInput(things, "ball");
const addToList = add.addInput(things, "cat")

console.log(filteredList);
console.log(things);
