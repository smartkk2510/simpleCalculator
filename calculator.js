/**
 * @jest-environment jsdom
 */
const add = (num1, num2) => {
  return num1 + num2;
  //document.getElementById("result").innerHTML = sum;
  //console.log(sum);
};
const sub = (num1, num2) => {
  return num1 - num2;
};
const mul = (num1, num2) => {
  return num1 * num2;
};
const div = (num1, num2) => {
  return num1 / num2;
};
module.exports = { add, sub, mul, div };
