import { createBoard } from './gameboard';
import { createPlayer } from './player';
import { createShip } from './ship';

export const game = (() => {
	const p1 = createPlayer(createBoard);
	const p2 = createPlayer(createBoard, 'Computer');
	let shipLengths = [3, 3, 4];
	p2.isComputer = true;
	addShips(p2);

	const isOver = function (p1, p2) {
		return p1.board.isAllSunk() || p2.board.isAllSunk();
	};

	const getWinner = function (p1, p2) {
		return p1.board.isAllSunk() ? p2 : p1;
	};

  const playRound = function (p1, p2, dom, target = null) {
    p1.attack(p2, target);
		dom.update(p2);
		if (game.isOver(p1, p2)) {
			dom.end(game, document.querySelector('.game'));
			return;
		}

		p2.attackRandom(p1);
		dom.update(p1);
		if (game.isOver(p1, p2)) {
			dom.end(game, document.querySelector('.game'));
		}
	};

	return {
		p1,
		p2,
		shipLengths,
		isOver,
		getWinner,
		playRound,
	};
})();

function addShips(p2) {
	p2.board.placeShip(createShip, 4, [0, 0]);
	p2.board.placeShip(createShip, 3, [4, 2]);
	p2.board.placeShip(createShip, 3, [2, 4]);
}
