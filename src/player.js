export const createPlayer = (createBoard, name = 'Foo') => {
	let player = {};
	player.name = name;
	player.isComputer = false;
	player.board = createBoard();

	player.hitQueue = [];

	player.attack = function (enemy, coord) {
		if (player.isComputer) {
			let initHits = enemy.board.hits.length;
			let initMisses = enemy.board.misses.length;
			let dim = enemy.board.dim;

			while (
				enemy.board.hits.length == initHits &&
				enemy.board.misses.length == initMisses
			) {
				if (player.hitQueue.length) {
					// get coord from queue
					coord = player.hitQueue.shift();
				} else {
					// generate random coord
					coord = getRandCoord(dim);
				}
				enemy.board.receiveAttack(coord);
			}
			// if hit, add neighbors to queue
			if (enemy.board.hits.length > initHits) {
				let neighbors = getNeighbors(coord, dim);
				player.hitQueue = player.hitQueue.concat(neighbors);
			}
		} else {
			enemy.board.receiveAttack(coord);
		}
	};

	return player;
};

export function getRandCoord(dim) {
	let x = Math.floor(Math.random() * dim);
	let y = Math.floor(Math.random() * dim);
	return [x, y];
}

function getNeighbors(coord, dim) {
	let [x, y] = coord;

	// generate neighbors
	let top = [x, y - 1];
	let bot = [x, y + 1];
	let left = [x - 1, y];
	let right = [x + 1, y];
	let output = [top, bot, left, right];

	// keep only coordinates in bounds
	for (let i = 0; i < 2; i++) {
		output = output.filter((coord) => {
			return coord[i] < dim && coord[i] >= 0;
		});
	}

	return output;
}
