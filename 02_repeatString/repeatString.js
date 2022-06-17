const repeatString = function (theString, repeats) {
  let compoundString = "";
  if (repeats < 0) {
    compoundString = "ERROR";
  }

  for (let i = 0; i < repeats; i++) {
    compoundString += theString;
  }
  return compoundString;
};

// Do not edit below this line
module.exports = repeatString;
