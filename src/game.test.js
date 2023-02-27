import { game } from './game';

let p1;
let p2;
let dom;

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

  dom = {
		update: jest.fn(() => {}),
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
	game.playRound(p1, p2, dom);
	expect(p1.attack).toHaveBeenCalledTimes(1);
  expect(p2.attackRandom).toHaveBeenCalledTimes(0);
  expect(dom.update).toHaveBeenCalledTimes(1);
});

test('game calls attack moves for each player in a full round played', () => {
  p2.board.isAllSunk = jest.fn(() => false);
  game.playRound(p1, p2, dom);
	expect(p1.attack).toHaveBeenCalledTimes(1);
	expect(p2.attackRandom).toHaveBeenCalledTimes(1);
});

test('game calls to update DOM after each move in a round', () => {
  game.playRound(p1, p2, dom);
  expect(dom.update).toHaveBeenCalledTimes(2);
  expect(dom.update).toHaveBeenCalledWith(p1);
  expect(dom.update).toHaveBeenCalledWith(p2);
})
