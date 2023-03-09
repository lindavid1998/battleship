import { createBoard } from './gameboard';
import { createPlayer, getRandCoord } from './player';
import { createShip } from './ship';

export const game = (() => {
	const p1 = createPlayer(createBoard);
	const p2 = createPlayer(createBoard, 'Computer');
	let shipLengths = [3, 3, 4];
	p2.isComputer = true;
	addShipsToCompBoard(p2, shipLengths);

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

		p2.attack(p1);
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

function addShipsToCompBoard(p2, lengths) {
	let dim = p2.board.dim;

	lengths.forEach((len) => {
		let ships = p2.board.ships;
		let temp = ships.length;
		while (ships.length == temp) {
			let coord = getRandCoord(dim);
			let isHorizontal = Math.random() >= 0.5;
			p2.board.placeShip(createShip, len, coord, isHorizontal);
		}
	});
}
