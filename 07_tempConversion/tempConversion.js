const ftoc = function (tempFahrenTemp) {
  let celsiusTemp = (tempFahrenTemp - 32) * (5 / 9);

  if (celsiusTemp == Math.round(celsiusTemp)) {
    return celsiusTemp;
  }

  return Number(celsiusTemp.toFixed(1));
};

const ctof = function (tempCelsius) {
  let fahrenTemp = tempCelsius * (9 / 5) + 32;

  if (fahrenTemp == Math.round(fahrenTemp)) {
    return fahrenTemp;
  }

  return Number(fahrenTemp.toFixed(1));
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
