// const convertToCelsius = function() {
// };

// const convertToFahrenheit = function() {
// };

// F = (C * 1.8) + 32

// C = ((F-32)/1.8)

function toCelcius(tempF){
  let newTemp = ((tempF - 32)/1.8);
  return newTemp.toFixed(1);
};

function toFahrenheit(tempC){
  let newTemp = ((tempC * 1.8) + 32);
  return newTemp.toFixed(1);
}

console.log(toCelcius(32));
console.log(toCelcius(100));
console.log(toFahrenheit(0));
console.log(toFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
