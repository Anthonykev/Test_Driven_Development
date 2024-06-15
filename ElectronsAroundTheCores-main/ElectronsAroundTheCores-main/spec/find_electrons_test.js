describe("Electrons around the cores", () => {
  // 1. to do
  it('should return "array and input are valid" for input with length between 4 to 6', () => {
    expect(proveInputs([1, 2, 3, 4])).toBe("array and input are valid");
    expect(proveInputs([1, 2, 3, 4, 5])).toBe("array and input are valid");
    expect(proveInputs([1, 2, 3, 4, 5, 6])).toBe("array and input are valid");
  });

  // 2. to do
  // it('should return "input is valid to 1-6 range" for input with range between 1 to 6', () => {
  //   expect(proveInputs([1, 2, 3, 4, 5, 6, 1, 2, 1])).toBe("valid input");
  //   expect(proveInputs([1, 2, 3, 4, 5, 1, 2, 3])).toBe("valid input");
  // });

  // 3. to do
  it('should return "array and input are valid" for array.length between 4 to 6 and input with range between 1 to 6', () => {
    expect(proveInputs([1, 2, 3, 4, 5, 6])).toBe("array and input are valid");
    expect(proveInputs([1, 2, 3, 4])).toBe("array and input are valid");
  });

  // 4. to do
  it('should return "invalid input, array length must between 4 to 6" for a not valid array', () => {
    expect(proveInputs([1, 2, 3])).toBe(
      "invalid input, array length must between 4 to 6"
    );
    expect(proveInputs([4, 5, 6, 4, 3, 2, 1, 2])).toBe(
      "invalid input, array length must between 4 to 6"
    );
  });

  // 5. to do
  it('should return "invalid input, input must between 1 to 6" for a not valid input', () => {
    expect(proveInputs([1, 2, 8, 4])).toBe(
      "invalid input, input must between 1 to 6"
    );
    expect(proveInputs([6, 7, 8, 9])).toBe(
      "invalid input, input must between 1 to 6"
    );
  });

  // 6. to do
  it('should return "6" for a input [1,2,3,4,5]', () => {
    expect(findElectrons([1, 2, 3, 4, 5])).toBe(6);
  });

  // 7. to do
  it('should return "4" for a input [2,2,3,3]', () => {
    expect(findElectrons([2, 2, 3, 3])).toBe(4);
  });

  // 8. to do
  it('should return "2" for a input [6,6,4,4,1,3]', () => {
    expect(findElectrons([6, 6, 4, 4, 1, 3])).toBe(2);
  });

  // 9. to do
  it('should return "12" for a input [3,5,3,5,4,2]', () => {
    expect(findElectrons([3, 5, 3, 5, 4, 2])).toBe(12);
  });
});
