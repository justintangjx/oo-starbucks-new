var Item = require("../src/Item");

describe("Item", () => {
    it("should have a name and price", () => {
      var name = 'coffee'
      var price = 45
      var item1 = new Item(name, price);
      expect(item1.name).toEqual(name);
      expect(item1.price).toEqual(price)
    });
  });
  