import { createBoard } from './gameboard';
import { createShip } from './ship';

describe('ship placement', () => {
	let board = createBoard();
	let createShip = jest.fn();
	const shipOne = {
		position: [
			[1, 1],
			[2, 1],
			[3, 1],
		],
	};
	const shipTwo = {
		position: [
			[3, 1],
			[4, 1],
		],
	};
	const shipThree = {
		position: [
			[3, 2],
			[4, 2],
		],
	};
	const shipFour = {
		position: [
			[5, 3],
			[5, 4],
		],
	};

	afterEach(() => {
		jest.resetAllMocks();
		board.ships = [];
		board.occupied = [];
	});

	test('ship is placed horizontally specified coordinates', () => {
		createShip.mockReturnValue(shipOne);
		expect(board.ships.length).toBe(0);
		board.placeShip(createShip, 3, [1, 1]);
		expect(createShip).toHaveBeenCalledWith(3, [1, 1], true);
		expect(board.ships.length).toBe(1);
		expect(board.ships[0]).toMatchObject(shipOne);
	});

	test('ship is placed vertically at specified coordinates', () => {
		createShip.mockReturnValue(shipFour);
		expect(board.ships.length).toBe(0);
		board.placeShip(createShip, 2, [5, 3], false);
		expect(createShip).toHaveBeenCalledWith(2, [5, 3], false);
		expect(board.ships.length).toBe(1);
		expect(board.ships[0]).toMatchObject(shipFour);
	});

	test('ship is not placed if it overlaps with existing ship', () => {
		createShip
			.mockReturnValueOnce(shipOne)
			.mockReturnValueOnce(shipTwo)
			.mockReturnValueOnce(shipThree);

		expect(board.ships.length).toBe(0);
		board.placeShip(createShip); // should register
		expect(board.ships.length).toBe(1);
		board.placeShip(createShip); // should not register
		board.placeShip(createShip); // should register
		expect(board.ships.length).toBe(2);
		expect(board.ships[0]).toMatchObject(shipOne);
		expect(board.ships[1]).toMatchObject(shipThree);
	});

	test('ship is not placed if length goes beyond dimensions of board', () => {
		const shipFive = {
			position: [
				[7, 1],
				[8, 1],
			],
		};
		createShip.mockReturnValue(shipFive);

		expect(board.ships.length).toBe(0);
		board.placeShip(createShip); // should not register
		expect(board.ships.length).toBe(0);
	});
});

describe('game receives attack', () => {
	// create game
	let board = createBoard();
	board.placeShip(createShip, 2, [1, 1]); // 1,1 and 2,1
	board.placeShip(createShip, 2, [1, 2]); // 1,2 and 2,2

	test('game records a hit', () => {
		// call attack with coordinate
		board.receiveAttack([1, 1]);

		expect(board.ships[0].numOfHits).toBe(1); // expect 1st ship was hit
		expect(board.ships[1].numOfHits).toBe(0); // expect 2nd ship was not hit

		board.receiveAttack([2, 2]);

		expect(board.ships[0].numOfHits).toBe(1); // expect 1st ship was not hit
		expect(board.ships[1].numOfHits).toBe(1); // expect 2nd ship was hit

		expect(board.hits.length).toBe(2);
	});

	test('game does not record hit if position has already been hit', () => {
		board.receiveAttack([1, 1]);
		expect(board.ships[0].numOfHits).toBe(1); // 1st ship did not gain another hit
		expect(board.hits.length).toBe(2); // total number of hits is unchanged
		expect(board.misses.length).toBe(0); // total number of misses is unchanged
	});

	test('game records a miss', () => {
		board.receiveAttack([3, 3]);
		expect(board.misses).toEqual([[3, 3]]);
		board.receiveAttack([4, 3]);
		expect(board.misses).toEqual([
			[3, 3],
			[4, 3],
		]);
		expect(board.hits.length).toBe(2); // total number of hits is unchanged
	});
});

test('game reports whether all ships sunk', () => {
	let board = createBoard();
	board.placeShip(createShip, 2, [1, 1]);
	board.placeShip(createShip, 2, [3, 2]);
	let attacks = [
		[1, 1],
		[2, 1],
		[3, 2],
		[4, 2],
	];
	expect(board.isAllSunk()).toBe(false);
	attacks.forEach((attack) => board.receiveAttack(attack));
	expect(board.isAllSunk()).toBe(true);
});
