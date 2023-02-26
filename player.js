export const createPlayer = (name = 'Foo') => {
	let player = {};
	player.name = name;
	player.isComputer = false;

	player.attack = function (enemyBoard, coord) {
		enemyBoard.receiveAttack(coord);
	};

	player.attackRandom = function (enemyBoard) {
        if (player.isComputer) {
            let numOfInitHits = enemyBoard.hits.length;
            let dim = enemyBoard.dim;
			while (enemyBoard.hits.length == numOfInitHits) {
				enemyBoard.receiveAttack(getRandCoord(dim));
			}
		}
	};

	function getRandCoord(dim) {
		let x = Math.floor(Math.random() * dim);
		let y = Math.floor(Math.random() * dim);
		return [x, y];
	}

	return player;
};
