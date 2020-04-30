// This function filters the user input from an array if the input is found - there is no error handling in this function

// the arrows replaces the function key word in ES6

// const filterInput = function (arr, userInput) {
//   return arr.filter(function (item) {
//     return item != userInput;
//   });
// };

// is the same as

const filterInput = (arr, userInput) => {
  return arr.filter((item) => {
    return item != userInput;
  });
};

const addInput = (arr, userInput) => {
  return arr.push(userInput);
};

// the module.exports statement makes the the filterInput and addInput functions available to other modules (files)
module.exports = { filterInput, addInput };
