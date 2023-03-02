import { game } from './game';

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
			if (player.isComputer) {
				gridPos.addEventListener('click', clickHandler);
			}
			boardDiv.appendChild(gridPos);
			i++;
		}

		// iterate through occupied positions and mark
		board.occupied.forEach((pos) => {
			let i = convertCoordToIndex(board.dim, pos);
			if (!player.isComputer) {
				boardDiv.querySelectorAll('.grid-pos')[i].classList.add('occupied');
			}
		});

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
		winnerDiv.textContent = winner.name;
		div.appendChild(winnerDiv);
	};

	return {
		setup,
		update,
		end,
	};
})();

export function convertCoordToIndex(dim, pos) {
	return pos[0] + dim * pos[1];
}

export function convertIndexToCoord(dim, index) {
	let x = index % dim;
	let y = Math.floor(index / dim);
	return [x, y];
}

function clickHandler(e) {
	let target = convertIndexToCoord(game.p1.board.dim, e.target.id);
	game.playRound(game.p1, game.p2, dom, target);
}