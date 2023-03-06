/**
 * @jest-environment jsdom
 */

import { dom } from './dom';

const dim = 8;

describe('when game is over', () => {
	let game = {
		getWinner: jest.fn(() => {
			return {
				name: 'Test',
			};
		}),
	};

	let div = {
		appendChild: jest.fn(() => {}),
	};

	dom.end(game, div);

	test('game shows winner on DOM', () => {
		expect(game.getWinner).toHaveBeenCalledTimes(1);

		const winner = document.createElement('div');
		winner.textContent = `${game.getWinner().name} wins!`;
		winner.classList.add('winner');

		expect(div.appendChild).toHaveBeenCalledTimes(1);
		expect(div.appendChild).toHaveBeenCalledWith(winner);
	});
});
