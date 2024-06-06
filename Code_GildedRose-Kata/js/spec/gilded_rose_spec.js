describe("Gilded Rose", function () {
  it("should test all items, if they are correctly inputed", function () {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Conjured Mana Cake", 3, 6),
    ];
    // update_quality();
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[1].name).toEqual("Aged Brie");
    expect(items[2].name).toEqual("Elixir of the Mongoose");
    expect(items[3].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[4].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[5].name).toEqual("Conjured Mana Cake");

    expect(items[0].sell_in).toEqual(10);
    expect(items[1].sell_in).toEqual(2);
    expect(items[2].sell_in).toEqual(5);
    expect(items[3].sell_in).toEqual(0);
    expect(items[4].sell_in).toEqual(15);
    expect(items[5].sell_in).toEqual(3);

    expect(items[0].quality).toEqual(20);
    expect(items[1].quality).toEqual(0);
    expect(items[2].quality).toEqual(7);
    expect(items[3].quality).toEqual(80);
    expect(items[4].quality).toEqual(20);
    expect(items[5].quality).toEqual(6);
  });

  it("", function () {});
});
