import { createPlayer } from './player';

let player;
let enemyBoard;

beforeAll(() => {
	player = createPlayer();

	enemyBoard = {
		receiveAttack: jest.fn(() => {}),
		hits: [
			[1, 0],
			[4, 0],
		],
	};
});

afterEach(() => {
	jest.clearAllMocks();
});

test('player can attack enemy', () => {
	player.attack(enemyBoard, [1, 1]);
	expect(enemyBoard.receiveAttack).toHaveBeenCalledWith([1, 1]);
});

test('player cannot make random attacks', () => {
	player.attackRandom(enemyBoard);

	// expect that there are no side effects
    expect(enemyBoard.receiveAttack).not.toHaveBeenCalled();
	expect(enemyBoard.hits).toEqual([
		[1, 0],
		[4, 0],
	]);
});

test('computer can make random attacks', () => {
	let computer = createPlayer();
	computer.isComputer = true;

	let enemyBoard = {
		dim: 5,
		hits: [
			[1, 0],
			[2, 0],
		],
		receiveAttack: jest.fn((coord) => {
			enemyBoard.hits.push(coord);
		}),
	};

	computer.attackRandom(enemyBoard);
	expect(enemyBoard.receiveAttack).toHaveBeenCalled();
	expect(enemyBoard.hits.length).toEqual(3);
});
