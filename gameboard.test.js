import { createGameBoard } from './gameboard';

test('ship is placed on board at specified coordinates', () => {
	let board = createGameBoard();
	let createShip = jest.fn();
	createShip.mockReturnValue({
		length: 3,
		numOfHits: 0,
		position: [
			[1, 1],
			[2, 1],
			[3, 1],
		],
	});

	expect(board.ships.length).toBe(0);
	board.placeShip(createShip, 3, [1, 1]);
	expect(createShip).toHaveBeenCalledWith(3, [1, 1]);

	const ship = {
		length: 3,
		numOfHits: 0,
		position: [
			[1, 1],
			[2, 1],
			[3, 1],
		],
    };
    
	expect(board.ships[0]).toMatchObject(ship);
	expect(board.ships.length).toBe(1);
});

test('ship is not placed if it overlaps with existing ship', () => {});

test('ship is not placed if length goes beyond dimensions of board', () => {});
