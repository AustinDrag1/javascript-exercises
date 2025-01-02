const convertToFahrenheit = function(temp) {
  let exactValue = temp * 9 / 5 + 32;
  return Math.round(exactValue * 10) / 10;
};

const convertToCelsius = function(temp) {
  let exactValue = (temp - 32) * 5 / 9;
  return Math.round(exactValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
