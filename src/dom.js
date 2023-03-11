import { game } from './game';
import { createShip } from './factories/ship';

export const dom = (() => {
	const setup = function (parentDiv, player) {
		let boardDiv = document.createElement('div');
		boardDiv.classList.add('board');
		if (player.isComputer) {
			boardDiv.style.display = 'none';
		}
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

		let name = document.createElement('div');
		name.textContent = player.name;
		name.classList.add('name');
		if (player.isComputer) {
			name.style.display = 'none';
		}

		parentDiv.appendChild(boardDiv);
		parentDiv.appendChild(name);
	};

	const updateHitAndMiss = function (player) {
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

	const updateOccupied = function (player) {
		let boardDiv = document.getElementById(player.name);
		let board = player.board;
		board.occupied.forEach((pos) => {
			let i = convertCoordToIndex(board.dim, pos);
			if (!player.isComputer) {
				boardDiv.querySelectorAll('.grid-pos')[i].classList.add('occupied');
			}
		});
	};

	const end = function (game, div) {
		// remove event listener from p2 board
		let gridPos = document.querySelectorAll('.grid-pos');
		gridPos.forEach((pos) => {
			pos.removeEventListener('click', playRoundHandler);
		});

		// show winner on page
		let winner = game.getWinner(game.p1, game.p2);
		div.textContent = `Winner: ${winner.name}`;
	};

	return {
		setup,
		updateHitAndMiss,
		updateOccupied,
		end,
	};
})();

function convertCoordToIndex(dim, pos) {
	return pos[0] + dim * pos[1];
}

export function convertIndexToCoord(dim, index) {
	let x = index % dim;
	let y = Math.floor(index / dim);
	return [x, y];
}

function playRoundHandler(e) {
	let target = convertIndexToCoord(game.p1.board.dim, e.target.id);
	game.playRound(game.p1, game.p2, dom, target);
	e.target.removeEventListener('click', playRoundHandler);
}

function placeShipHandler(e) {
	let board = game.p1.board;
	let dim = board.dim;
	let p1Div = document.getElementById(game.p1.name);
	let temp = board.ships.length;
	let isHorizontal = getOrientation();

	// place ship
	board.placeShip(
		createShip,
		game.shipLengths[0],
		convertIndexToCoord(dim, e.target.id),
		isHorizontal
	);

	// if successful placement, refresh occupied
	if (board.ships.length != temp) {
		game.shipLengths.shift();
		dom.updateOccupied(game.p1);
	}

	// if all ships placed, start game
	if (game.shipLengths == 0) {
		// remove event listeners from p1 board
		let p1Grid = p1Div.querySelectorAll('.grid-pos');
		p1Grid.forEach((grid) =>
			grid.removeEventListener('click', placeShipHandler)
		);

		/// add event listeners to computer board
		let p2Board = document.querySelector('#Computer.board');
		let p2Grid = p2Board.querySelectorAll('.grid-pos');
		p2Grid.forEach((grid) => grid.addEventListener('click', playRoundHandler));

		p2Board.style.display = 'grid';
		document.querySelectorAll('.name')[1].style.display = 'flex';
		document.querySelector('.orientation').style.display = 'none';
		document.querySelector('.status').textContent = 'Game is live!';
	}
}

export function getOrientation() {
	let orientation = document.querySelector('.orientation').textContent;
	return orientation == 'Horizontal';
}
