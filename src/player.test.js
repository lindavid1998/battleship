import { createPlayer } from './player';

let player;
let enemy;

beforeAll(() => {
	let createGameBoard = jest.fn(() => {
		return {
			dim: 5,
		};
	});

	player = createPlayer(createGameBoard, 'test');

	enemy = {
		board: {
			dim: 5,
			hits: [
				[1, 0],
				[2, 0],
			],
			misses: [],
			receiveAttack: jest.fn((coord) => {
				enemy.board.hits.push(coord);
			}),
		},
	};
});

afterEach(() => {
	jest.clearAllMocks();
});

test('player is created with gameboard', () => {
	expect(player.board).toEqual({
		dim: 5,
	});
	expect(player.name).toBe('test');
});

test('player can attack enemy', () => {
	player.attack(enemy, [1, 1]);
	expect(player.isComputer).toBe(false);
	expect(enemy.board.receiveAttack).toHaveBeenCalledWith([1, 1]);
});

describe('computer can attack', () => {
	beforeAll(() => {
		player.isComputer = true;
	});

	test('attacks randomly if nothing in hit queue', () => {
		expect(player.hitQueue.length).toBe(0);
		player.attack(enemy);
		expect(enemy.board.receiveAttack).toHaveBeenCalledTimes(1);
		expect(enemy.board.hits.length).toEqual(4);
	});

	test('populates hit queue after a hit', () => {
		expect(player.hitQueue.length).toBeGreaterThan(0);
	});

	test('attacks from hit queue if non empty', () => {
		let dequeue = player.hitQueue[0];
		player.attack(enemy);
		expect(enemy.board.receiveAttack).toHaveBeenCalledTimes(1);
		expect(enemy.board.receiveAttack).toHaveBeenCalledWith(dequeue);
	});

	test('does not populate hit queue after a miss', () => {
		enemy.board.receiveAttack = jest.fn((coord) => {
			enemy.board.misses.push(coord);
		});

		player.hitQueue = []

		expect(enemy.board.misses.length).toBe(0);
		player.attack(enemy);
		expect(enemy.board.receiveAttack).toHaveBeenCalled();
		expect(enemy.board.misses.length).toBe(1);
		expect(player.hitQueue.length).toBe(0);
	});
});
