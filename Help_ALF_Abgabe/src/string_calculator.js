// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function (string_numbers) {
  //
  let result = 0;
  let delimeter = ",";
  if (string_numbers.includes(delimeter)) {
    let numbers = string_numbers.split(delimeter);
    numbers.forEach((number) => {
      result = result + parseInt(number);
    });
  } else if (string_numbers.length != 0) {
    result = string_numbers.length;
  }
  return result;
};
