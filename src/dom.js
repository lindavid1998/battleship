player.setupDisplay = function (parentDiv) {
	// create grid using dimensions of board
	let boardDiv = document.createElement('div');
	boardDiv.classList.add('board');
	boardDiv.setAttribute('id', player.name);

	let i = 0;
	while (i < player.board.dim * player.board.dim) {
		let gridPos = document.createElement('div');
		gridPos.classList.add('grid-pos');
		gridPos.setAttribute('id', i);
		boardDiv.appendChild(gridPos);
		i++;
	}

	// iterate through occupied positions and mark
	player.board.occupied.forEach((pos) => {
		let i = getIndexOnBoard(player.board.dim, pos);
		boardDiv.querySelectorAll('.grid-pos')[i].classList.add('occupied');
	});

	parentDiv.appendChild(boardDiv);
};

player.updateDisplay = function () {
	let boardDiv = document.getElementById(player.name);

	player.board.hits.forEach((pos) => {
		let i = getIndexOnBoard(player.board.dim, pos);
		boardDiv.querySelectorAll('.grid-pos')[i].classList.remove('occupied');
		boardDiv.querySelectorAll('.grid-pos')[i].classList.add('hit');
	});

	player.board.misses.forEach((pos) => {
		let i = getIndexOnBoard(player.board.dim, pos);
		boardDiv.querySelectorAll('.grid-pos')[i].classList.add('miss');
	});
};

function getIndexOnBoard(dim, coord) {
	return coord[0] + dim * coord[1];
}
