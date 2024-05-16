describe("Find Spaceship", function () {
  it('should return string lenght for "..." ', function () {
    const map = "...";
    const result = findSpaceship(map);
    expect(result).toEqual(3); // 2 damit ich ein Fail habe
  });
});
