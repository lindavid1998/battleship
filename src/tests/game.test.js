/**
 * @jest-environment jsdom
 */

import { game } from '../game';

let p1;
let p2;
let dom;

beforeEach(() => {
	p1 = {
		name: 'Foo',
		attack: jest.fn(() => {}),
		board: {
			isAllSunk: jest.fn(() => false),
		},
	};

	p2 = {
		name: 'Bar',
		attack: jest.fn(() => {}),
		board: {
			isAllSunk: jest.fn(() => false),
		},
	};

	dom = {
		updateHitAndMiss: jest.fn(() => {}),
		end: jest.fn(() => {}),
	};
});

afterEach(() => {
	jest.clearAllMocks();
});

test('game is not over when neither player has all ships sunk', () => {
	expect(game.isOver(p1, p2)).toBe(false);
});

describe('in a full round where neither player wins', () => {
	test('game calls attack moves for each player once', () => {
		game.playRound(p1, p2, dom);
		expect(p1.attack).toHaveBeenCalledTimes(1);
		expect(p2.attack).toHaveBeenCalledTimes(1);
	});

	test('game makes calls to update DOM after each move', () => {
		game.playRound(p1, p2, dom);
		expect(dom.updateHitAndMiss).toHaveBeenCalledTimes(2);
		expect(dom.updateHitAndMiss).toHaveBeenCalledWith(p1);
		expect(dom.updateHitAndMiss).toHaveBeenCalledWith(p2);
	});
});

describe('in a half round where player one wins', () => {
	beforeEach(() => {
		p2.board.isAllSunk = jest.fn(() => true);
	});

	test('only player 1 makes an attack', () => {
		game.playRound(p1, p2, dom);
		expect(p1.attack).toHaveBeenCalledTimes(1);
		expect(p2.attack).toHaveBeenCalledTimes(0);
	});

	test('game makes calls to update DOM', () => {
		game.playRound(p1, p2, dom);
		expect(dom.updateHitAndMiss).toHaveBeenCalledTimes(1);
		expect(dom.end).toHaveBeenCalledTimes(1);
	});

	test('game is over', () => {
		game.playRound(p1, p2, dom);
		expect(game.isOver(p1, p2)).toBe(true);
		expect(game.getWinner(p1, p2)).toEqual(p1);
	});
});

describe('in a full round where player 2 wins', () => {
	beforeEach(() => {
		p2.attack = jest.fn(() => {
			p1.board.isAllSunk = jest.fn(() => true);
		});
		p2.board.isAllSunk = jest.fn(() => false);
	});

	test('both players attack', () => {
		game.playRound(p1, p2, dom);
		expect(p1.attack).toHaveBeenCalledTimes(1);
		expect(p2.attack).toHaveBeenCalledTimes(1);
	});

	test('game makes calls to update DOM', () => {
		game.playRound(p1, p2, dom);
		expect(dom.updateHitAndMiss).toHaveBeenCalledTimes(2);
		expect(dom.end).toHaveBeenCalledTimes(1);
	});

	test('game is over', () => {
		game.playRound(p1, p2, dom);
		expect(game.isOver(p1, p2)).toBe(true);
		expect(game.getWinner(p1, p2)).toEqual(p2);
	});
});

test('game is created with 3 ships placed randomly on computer board', () => {
	expect(game.p2.board.ships.length).toBe(3);
	expect(game.p2.board.ships[0].length).toBe(3);
	expect(game.p2.board.ships[1].length).toBe(3);
	expect(game.p2.board.ships[2].length).toBe(4);
})