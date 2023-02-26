import { createShip } from './ship';

let ship = createShip(3, [1, 0]);

test('ship position is determined using length from starting position', () => {
	expect(ship.position).toStrictEqual([
		[1, 0],
		[2, 0],
		[3, 0],
	]);
	expect(ship.length).toBe(3);
});

test('ship hit count increases by 1 when hit', () => {
	expect(ship.numOfHits).toBe(0);
	ship.hit();
	expect(ship.numOfHits).toBe(1);
	ship.hit();
	expect(ship.numOfHits).toBe(2);
});

test('ship is sunk when number of hits equals length', () => {
	expect(ship.isSunk()).toBe(false);
	ship.hit();
	expect(ship.isSunk()).toBe(true);
});
