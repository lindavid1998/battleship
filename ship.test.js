import { createShip } from './ship';

test('ship position is determined using length from starting position', () => {
	let ship = createShip(3, [1, 0]);
	expect(ship.position).toStrictEqual([
		[1, 0],
		[2, 0],
		[3, 0],
	]);
	expect(ship.length).toBe(3);
});

test('ship hit count increases by 1 when hit', () => {
	let ship = createShip(3, [1, 0]);
	expect(ship.numOfHits).toBe(0);
	ship.hit();
	expect(ship.numOfHits).toBe(1);
	ship.hit();
	expect(ship.numOfHits).toBe(2);
});

test('ship is sunk when number of hits equals length', () => {
    let ship = createShip(3, [1, 0]);
    expect(ship.isSunk()).toBe(false);
	ship.hit();
	ship.hit();
	expect(ship.isSunk()).toBe(false);
	ship.hit();
	expect(ship.isSunk()).toBe(true);
});
