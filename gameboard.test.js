import { createGameBoard } from './gameboard';

test('ship is placed on board at specified coordinates', () => {
	let board = createGameBoard();
	let createShip = jest.fn();
	const mockShip = {
		length: 3,
		numOfHits: 0,
		position: [
			[1, 1],
			[2, 1],
			[3, 1],
		],
	};
	createShip.mockReturnValue(mockShip);

	expect(board.ships.length).toBe(0);
	board.placeShip(createShip, 3, [1, 1]);
	expect(createShip).toHaveBeenCalledWith(3, [1, 1]);
	expect(board.ships.length).toBe(1);
	expect(board.ships[0]).toMatchObject(mockShip);
});

test('ship is not placed if it overlaps with existing ship', () => {
	let board = createGameBoard();
	let createShip = jest.fn();
	const mockShipOne = {
		length: 3,
		numOfHits: 0,
		position: [
			[1, 1],
			[2, 1],
			[3, 1],
		],
	};
	const mockShipTwo = {
		length: 2,
		numOfHits: 0,
		position: [
			[3, 1],
			[4, 1],
		],
	};
	createShip.mockReturnValueOnce(mockShipOne).mockReturnValue(mockShipTwo);
	expect(board.ships.length).toBe(0);
	board.placeShip(createShip, 3, [1, 1]);
	board.placeShip(createShip, 2, [3, 1]); // should not register
	expect(board.ships.length).toBe(1);
	expect(board.ships[0]).toMatchObject(mockShipOne);
});

test.skip('ship is not placed if length goes beyond dimensions of board', () => {});
