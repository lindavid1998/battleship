import { createPlayer } from './player';

let player;
let enemy;

beforeAll(() => {
	let createGameBoard = jest.fn(() => {
		return {
			dim: 2,
		};
	});
	player = createPlayer(createGameBoard, 'test');

	enemy = {
		board: {
			receiveAttack: jest.fn(() => {}),
			hits: [
				[1, 0],
				[4, 0],
			],
		},
	};
});

afterEach(() => {
	jest.clearAllMocks();
});

test('player is created with gameboard', () => {
	expect(player.board).toEqual({
		dim: 2,
	});
	expect(player.name).toBe('test');
});

test('player can attack enemy', () => {
	player.attack(enemy, [1, 1]);
	expect(enemy.board.receiveAttack).toHaveBeenCalledWith([1, 1]);
});

test('player cannot make random attacks', () => {
	expect(player.isComputer).toBe(false);
	player.attackRandom(enemy);

	// expect that there are no side effects
	expect(enemy.board.receiveAttack).not.toHaveBeenCalled();
	expect(enemy.board.hits).toEqual([
		[1, 0],
		[4, 0],
	]);
});

test('computer can make random attacks', () => {
	player.isComputer = true;

	let enemy = {
		board: {
			dim: 5,
			hits: [
				[1, 0],
				[2, 0],
			],
			receiveAttack: jest.fn((coord) => {
				enemy.board.hits.push(coord);
			}),
		},
	};

	player.attackRandom(enemy);
	expect(enemy.board.receiveAttack).toHaveBeenCalled();
	expect(enemy.board.hits.length).toEqual(3);
});
