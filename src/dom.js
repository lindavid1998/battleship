import { game } from './game';
import { createShip } from './ship';

export const dom = (() => {
	const setup = function (parentDiv, player) {
		let boardDiv = document.createElement('div');
		boardDiv.classList.add('board');
		boardDiv.setAttribute('id', player.name);

		let board = player.board;

		let i = 0;
		while (i < board.dim * board.dim) {
			let gridPos = document.createElement('div');
			gridPos.classList.add('grid-pos');
			gridPos.setAttribute('id', i);
			if (!player.isComputer) {
				gridPos.addEventListener('click', placeShipHandler);
			}
			boardDiv.appendChild(gridPos);
			i++;
		}

		dom.refreshOccupied(boardDiv, player);
		parentDiv.appendChild(boardDiv);
	};

	const update = function (player) {
		let boardDiv = document.getElementById(player.name);
		let gridUnits = boardDiv.querySelectorAll('.grid-pos');
		let board = player.board;

		board.hits.forEach((pos) => {
			let i = convertCoordToIndex(board.dim, pos);
			gridUnits[i].classList.remove('occupied');
			gridUnits[i].classList.add('hit');
		});

		board.misses.forEach((pos) => {
			let i = convertCoordToIndex(board.dim, pos);
			gridUnits[i].classList.add('miss');
		});
	};

	const end = function (game, div) {
		// remove event listener from p2 board
		let gridUnits = document.querySelectorAll('.grid-pos');
		gridUnits.forEach((unit) => {
			unit.removeEventListener('click', clickHandler);
		});

		// get winner
		let winner = game.getWinner(game.p1, game.p2);

		// show winner on DOM
		let winnerDiv = document.createElement('div');
		winnerDiv.classList.add('winner');
		winnerDiv.textContent = `${winner.name} wins!`;
		div.appendChild(winnerDiv);
	};

	const refreshOccupied = function (boardDiv, player) {
		let board = player.board;
		board.occupied.forEach((pos) => {
			let i = convertCoordToIndex(board.dim, pos);
			if (!player.isComputer) {
				boardDiv.querySelectorAll('.grid-pos')[i].classList.add('occupied');
			}
		});
	};

	return {
		setup,
		update,
		end,
		refreshOccupied,
	};
})();

function convertCoordToIndex(dim, pos) {
	return pos[0] + dim * pos[1];
}

function convertIndexToCoord(dim, index) {
	let x = index % dim;
	let y = Math.floor(index / dim);
	return [x, y];
}

function clickHandler(e) {
	let target = convertIndexToCoord(game.p1.board.dim, e.target.id);
	game.playRound(game.p1, game.p2, dom, target);
	e.target.removeEventListener('click', clickHandler);
}

function placeShipHandler(e) {
	let board = game.p1.board;
	let dim = board.dim;
	let p1Div = document.getElementById(game.p1.name);
	let p2Div = document.getElementById(game.p2.name);
	let temp = board.ships.length;

	// get orientation
	let orientation = document.querySelector('.orientation').textContent;
	let isHorizontal = orientation == 'Horizontal';

	board.placeShip(
		createShip,
		game.shipLengths[0],
		convertIndexToCoord(dim, e.target.id),
		isHorizontal
	);

	if (board.ships.length != temp) {
		game.shipLengths.shift();
		dom.refreshOccupied(p1Div, game.p1);
	}

	if (game.shipLengths == 0) {
		// remove event listeners from p1 board
		let p1Grid = p1Div.querySelectorAll('.grid-pos');
		p1Grid.forEach((grid) =>
			grid.removeEventListener('click', placeShipHandler)
		);

		/// add event listeners to p2 board
		let p2Grid = p2Div.querySelectorAll('.grid-pos');
		p2Grid.forEach((grid) => grid.addEventListener('click', clickHandler));
	}
}
