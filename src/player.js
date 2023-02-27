export const createPlayer = (createBoard, name = 'Foo') => {
	let player = {};
	player.name = name;
	player.isComputer = false;
	player.board = createBoard();

	player.attack = function (enemy, coord) {
		enemy.board.receiveAttack(coord);
	};

	player.attackRandom = function (enemy) {
		if (player.isComputer) {
			let numOfInitHits = enemy.board.hits.length;
			let dim = enemy.board.dim;
			while (enemy.board.hits.length == numOfInitHits) {
				enemy.board.receiveAttack(getRandCoord(dim));
			}
		}
	};

	return player;
};

function getRandCoord(dim) {
	let x = Math.floor(Math.random() * dim);
	let y = Math.floor(Math.random() * dim);
	return [x, y];
}
