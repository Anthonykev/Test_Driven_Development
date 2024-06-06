function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.name === "Sulfuras, Hand of Ragnaros") {
      continue; // Skip Sulfuras
    }

    item.sell_in -= 1;

    if (item.name === "Aged Brie") {
      updateAgedBrie(item);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      updateBackstagePasses(item);
    } else if (item.name.startsWith("Conjured")) {
      updateConjuredItem(item);
    } else {
      updateNormalItem(item);
    }

    if (item.sell_in < 0) {
      handleExpiredItem(item);
    }
  }
}

function updateAgedBrie(item) {
  if (item.quality < 50) {
    item.quality += 1;
  }
}

function updateBackstagePasses(item) {
  if (item.quality < 50) {
    item.quality += 1;
    if (item.sell_in < 10) {
      item.quality += 1;
    }
    if (item.sell_in < 5) {
      item.quality += 1;
    }
  }
}

function updateConjuredItem(item) {
  if (item.quality > 0) {
    item.quality -= 2;
  }
}

function updateNormalItem(item) {
  if (item.quality > 0) {
    item.quality -= 1;
  }
}

function handleExpiredItem(item) {
  if (item.name === "Aged Brie") {
    if (item.quality < 50) {
      item.quality += 1;
    }
  } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    item.quality = 0;
  } else if (item.quality > 0) {
    if (item.name.startsWith("Conjured")) {
      item.quality -= 2;
    } else {
      item.quality -= 1;
    }
  }
}
