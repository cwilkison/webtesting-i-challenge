const { succeed, repair, fail } = require("./enhancer.js");
// test away!
describe("enhancer.js tests", () => {

  test("repair", () => {
    expect(repair({ name: "Knife", enhancement: 15, durability: 0 })).toEqual({
      name: "Knife",
      enhancement: 15,
      durability: 100,
    });
  });

  test("succeed", () => {
    expect(succeed({ name: "Gun", enhancement: 12, durability: 50})).toEqual({
      name: "Gun",
      enhancement: 13,
      durability: 50,
    });
  });

  test("fail", () => {
      expect(fail({ name: "Sword", enhancement: 20, durability: 30})).toEqual({
          name: "Sword",
          enhancement: 19,
          durability: 20,
      });
  });

});