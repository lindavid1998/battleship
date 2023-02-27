import { createBoard } from './gameboard';
import { createPlayer } from './player';
import { createShip } from './ship';

export const game = (() => {
	const p1 = createPlayer(createBoard);
	const p2 = createPlayer(createBoard, 'Computer');
	addShips(p1, p2);

	const isOver = function (p1, p2) {
		return p1.board.isAllSunk() || p2.board.isAllSunk();
	};

	const getWinner = function (p1, p2) {
		return p1.board.isAllSunk() ? p2 : p1;
	};

	const playRound = function (p1, p2) {
		// get user input
		let input = [0, 0]; // dummy value for now

		p1.attack(p2, input);
		if (game.isOver(p1, p2)) return;

		p2.attackRandom(p1);
		if (game.isOver(p1, p2)) return;
	};

	return {
		p1,
		p2,
		isOver,
		getWinner,
		playRound,
	};
})();

function addShips(p1, p2) {
	p1.board.placeShip(createShip, 3, [0, 0]);
	p1.board.placeShip(createShip, 3, [1, 1]);
	p1.board.placeShip(createShip, 4, [2, 5]);

	p2.board.placeShip(createShip, 4, [0, 0]);
	p2.board.placeShip(createShip, 3, [4, 2]);
	p2.board.placeShip(createShip, 3, [2, 4]);
}
