import { createGameBoard } from './gameboard';

test('ship is placed on board at specified coordinates', () => {
	let board = createGameBoard();
	let createShip = jest.fn();
	const mockShip = {
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

	const mockShipOne = {
		position: [
			[2, 1],
			[3, 1],
		],
	};
	const mockShipTwo = {
		position: [
			[3, 1],
			[4, 1],
		],
	};
	const mockShipThree = {
		position: [
			[3, 2],
			[4, 2],
		],
	};
	let createShip = jest.fn();
	createShip
		.mockReturnValueOnce(mockShipOne)
		.mockReturnValueOnce(mockShipTwo)
		.mockReturnValueOnce(mockShipThree);

	expect(board.ships.length).toBe(0);
    board.placeShip(createShip); // should register
    expect(board.ships.length).toBe(1);
	board.placeShip(createShip); // should not register
	board.placeShip(createShip); // should register
	expect(board.ships.length).toBe(2);
	expect(board.ships[0]).toMatchObject(mockShipOne);
	expect(board.ships[1]).toMatchObject(mockShipThree);
});

test('ship is not placed if length goes beyond dimensions of board', () => {
	let board = createGameBoard(5);

	const mockShipOne = {
		position: [
			[1, 1],
			[2, 1],
		],
	};

	const mockShipTwo = {
		position: [
			[5, 1],
			[6, 1],
		],
	};

	let createShip = jest.fn();
	createShip.mockReturnValueOnce(mockShipOne).mockReturnValueOnce(mockShipTwo);

    expect(board.ships.length).toBe(0);
    board.placeShip(createShip, 2, [1, 1]); // should register
    expect(board.ships.length).toBe(1);
    board.placeShip(createShip, 2, [5, 1]); // should not register
    expect(board.ships.length).toBe(1);
});
