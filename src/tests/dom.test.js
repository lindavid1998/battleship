/**
 * @jest-environment jsdom
 */

import { dom } from '../dom';

const dim = 8;

test('game checks winner when game is over', () => {
	let game = {
		getWinner: jest.fn(() => {
			return {
				name: 'Test',
			};
		}),
	};

	let div = {
		textContent: ''
	};

	dom.end(game, div);
	expect(game.getWinner).toHaveBeenCalledTimes(1);
	expect(div.textContent).toBe('Winner: Test')
});