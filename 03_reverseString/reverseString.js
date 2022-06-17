const reverseString = function (aString) {
  let splitString = aString.split("");
  let joinString = [];
  for (let i = splitString.length - 1; i >= 0; i--) {
    joinString.push(splitString[i]);
  }

  return joinString.join("").toString();
};

// Do not edit below this line
module.exports = reverseString;
