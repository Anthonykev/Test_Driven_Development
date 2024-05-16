describe("Find Spaceship", function () {
  it('should return string lenght for "..." ', function () {
    const map = "...";
    const result = findSpaceship(map);
    expect(result).toEqual(3);
  });

  it('should return no string for "100" ', function () {
    const map = 100;
    const result = findSpaceship(map);
    expect(result).toEqual("no String");
  });
});
