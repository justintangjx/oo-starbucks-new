var Item = require("../src/Item");
var Order = require("../src/Order");

describe("Order", () => {
    it("should have an item and the customer's name", () => {
      var item1 = new Item("bubble tea", 7)
      var order = new Order(item1, "justin");
  
      expect(order.item).toEqual(item1);
    });
});