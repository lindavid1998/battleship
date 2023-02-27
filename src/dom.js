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
			boardDiv.appendChild(gridPos);
			i++;
		}

		// iterate through occupied positions and mark
		board.occupied.forEach((pos) => {
			let i = convertCoordToIndex(board.dim, pos);
			boardDiv.querySelectorAll('.grid-pos')[i].classList.add('occupied');
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

	return {
		setup,
		update,
	};
})();

export function convertCoordToIndex(dim, pos) {
	return pos[0] + dim * pos[1];
}

export function convertIndexToCoord(dim, index) {
	let x = index % dim;
	let y = Math.floor(index / dim)
	return [x, y]
}