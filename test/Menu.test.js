var Menu = require("../src/Menu");
var Item = require("../src/Item");

describe("Menu", () => {
  it("should have a list of items", () => {
    var items = ["tea", "coffee"];
    var menu = new Menu(items);

    expect(menu.items).toEqual(items);
  });

  it("list of items should have a name and price ", () => {
    var item1 = new Item("tea", 4);
    var item2 = new Item("coffee", 5);
    var testitems = [item1, item2];
    var menu = new Menu(testitems);

    expect(menu.items).toEqual(testitems);
  });
});
