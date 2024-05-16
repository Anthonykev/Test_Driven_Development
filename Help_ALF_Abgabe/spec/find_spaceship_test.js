describe("Find Spaceship", function () {
  it('should return "Spaceship lost forever" without X', function () {
    const map = ".......";
    const result = findSpaceship(map);
    expect(result).toEqual("Spaceship lost forever");
  });

  it('should return "no string" for "100" ', function () {
    const map = 100;
    const result = findSpaceship(map);
    expect(result).toEqual("no String");
  });

  it('should return "found X" in the String ', function () {
    const map = "..X..";
    const result = findSpaceship(map);
    expect(result).toEqual("found X");
  });
});
