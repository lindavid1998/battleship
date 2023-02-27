import { game } from './game';

let p1;
let p2;

beforeAll(() => {
	p1 = {
    name: 'Foo',
    attack: jest.fn(() => {}),
		board: {
			isAllSunk: jest.fn(() => false),
		},
  };
  
	p2 = {
		name: 'Bar',
		attackRandom: jest.fn(() => {}),
		board: {
			isAllSunk: jest.fn(() => false),
		},
  };
  
});

afterEach(() => {
	jest.clearAllMocks();
});

test('game is over when one player has all ships sunk', () => {
	expect(game.isOver(p1, p2)).toBe(false);
	p2.board.isAllSunk = jest.fn(() => true);
	expect(game.isOver(p1, p2)).toBe(true);
	expect(game.getWinner(p1, p2).name).toEqual('Foo');
});

test('round is ended early if player one wins on turn', () => {
	game.playRound(p1, p2);
	expect(p1.attack).toHaveBeenCalledTimes(1);
	expect(p2.attackRandom).toHaveBeenCalledTimes(0);
});

test('game calls attack moves for each player in a full round played', () => {
  p2.board.isAllSunk = jest.fn(() => false);
  game.playRound(p1, p2);
	expect(p1.attack).toHaveBeenCalledTimes(1);
	expect(p2.attackRandom).toHaveBeenCalledTimes(1);
});
