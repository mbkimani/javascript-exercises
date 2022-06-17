const removeFromArray = function (anArray, ...args) {
  let elements = args;
  let newArray = [];
  outer: for (let i = 0; i < anArray.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      if (anArray[i] === elements[j]) {
        continue outer;
      }
    }
    newArray.push(anArray[i]);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
