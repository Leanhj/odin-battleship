import Ship from "./ship";

test("ship is created with correct length, times hit and sunk status", () => {
  const ship = new Ship(2);

  expect(ship.length).toEqual(2);
  expect(ship.hits).toEqual(0);
  expect(ship.sunk).toBe(false);
});

test("number of hits of intact ship after hit is equal to one", () => {
  const ship = new Ship(3);
  ship.hit();

  expect(ship.length).toEqual(3);
  expect(ship.hits).toEqual(1);
  expect(ship.sunk).toBe(false);
});

test("multiple hits increase number of hits by more than one", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();

  expect(ship.length).toEqual(3);
  expect(ship.hits).toEqual(2);
  expect(ship.sunk).toBe(false);
});
