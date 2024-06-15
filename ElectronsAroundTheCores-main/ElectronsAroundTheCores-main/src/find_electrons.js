function proveInputs(my_array) {
  if (my_array.length >= 4 && my_array.length <= 6) {
    for (let my_number of my_array) {
      if (my_number < 1 || my_number > 6) {
        return "invalid input, input must between 1 to 6";
      }
    }
    return "array and input are valid";
  } else {
    return "invalid input, array length must between 4 to 6";
  }
}

function findElectrons(my_array) {
  let count3 = 0;
  let count5 = 0;

  my_array.forEach((number) => {
    if (number === 3) {
      count3 += 2;
    }
    if (number === 5) {
      count5 += 4;
    }
  });
  let ElectronsCnt = count3 + count5;
  return ElectronsCnt;
}
