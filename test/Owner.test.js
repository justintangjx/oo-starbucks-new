var Owner = require("../src/Owner");
var Item = require("../src/Item");
var Order = require("../src/Order")
describe("Owner", () => {
  it("should create an owner successfully", () => {
    var owner = new Owner();

    expect(owner).toBeDefined();
    expect(owner).toBeInstanceOf(Owner);
  });

  it("should create an order with item and customer's name", () => {
    
    var item = new Item("tea", 5);
    var customerName = "justin";
    
    var expectedOrder = new Order(item, customerName);
    var testVar = [{firstName: 'chee'}];
    var owner = new Owner();

    expect(owner.createOrder(expectedOrder)).toEqual(owner.ordersList);
  });
});
