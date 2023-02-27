export function createBoard(dim = 8) {
	let board = {};

	board.dim = dim;
	board.ships = []; // array of Ships
	board.occupied = []; // array of coordinates occupied by ships
	board.misses = []; // array of coordinates
	board.hits = []; // array of coordinates

	board.placeShip = function (createShip, length, start) {
		let ship = createShip(length, start);

		if (isShipPositionValid(board, ship.position)) {
			board.occupied = board.occupied.concat(ship.position);
			board.ships.push(ship);
		}
	};

	board.receiveAttack = function (coord) {
		if (isMiss(board, coord)) {
			board.misses.push(coord);
		}

		if (isValidHit(board, coord)) {
			board.hits.push(coord);
			for (let i = 0; i < board.ships.length; i++) {
				let ship = board.ships[i];
				for (let j = 0; j < ship.position.length; j++) {
					if (JSON.stringify(ship.position[j]) == JSON.stringify(coord)) {
						ship.hit();
					}
				}
			}
		}
	};

	board.isAllSunk = function () {
		let ships = board.ships;
		for (let i = 0; i < ships.length; i++) {
			if (ships[i].isSunk() == false) return false;
		}

		return true;
	};

	return board;
}

function isMiss(board, coord) {
	let occupied = JSON.stringify(board.occupied);
	return occupied.indexOf(coord) == -1;
}

function isValidHit(board, coord) {
	let hits = JSON.stringify(board.hits);
	return hits.indexOf(coord) == -1;
}

function isShipPositionValid(board, shipPos) {
	let occupied = JSON.stringify(board.occupied);
	for (let i = 0; i < shipPos.length; i++) {
		let pos = shipPos[i];

		// return false if ship out of bounds
		if (pos[0] >= board.dim || pos[1] >= board.dim) return false;

		// return false if position already occupied
		if (occupied.indexOf(pos) != -1) return false;
	}
	return true;
}
