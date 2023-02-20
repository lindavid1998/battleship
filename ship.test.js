import { createShip } from './ship';

test('ship hit count increases by 1 when hit', () => {
	let ship = createShip(4);
	expect(ship.numOfHits).toBe(0);
	ship.hit();
	expect(ship.numOfHits).toBe(1);
	ship.hit();
	expect(ship.numOfHits).toBe(2);
});

test('ship is sunk when number of hits equals length', () => {
    let ship = createShip(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});