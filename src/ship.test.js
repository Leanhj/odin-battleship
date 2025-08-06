import Ship from "./ship";

test("ship is created with correct length, times hit and sunk status", () => {
  const ship = new Ship(2);
  expect(ship.length).toEqual(2);
  expect(ship.hits).toEqual(0);
  expect(ship.sunk).toBe(false);
});
