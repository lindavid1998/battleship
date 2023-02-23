export function createGameBoard(dim = 8) {
    let board = {};
    board.dim = dim;
	board.ships = []; // array of Ships
	board.occupied = []; // array of coordinates occupied by ships
	board.placeShip = function (createShip, length, start) {
		// create ship
		let ship = createShip(length, start);

		// add ship to board if positions are unoccupied
		if (isShipPositionValid(board, ship.position)) {
			board.occupied = board.occupied.concat(ship.position);
			board.ships.push(ship);
		}
	};

	return board;
}

function isShipPositionValid(board, shipPos) {
	let occupied = JSON.stringify(board.occupied);
    for (let i = 0; i < shipPos.length; i++) {
        // if x or y of shipPos[i] exceeds dim, return false
        let pos = shipPos[i];
        if (pos[0] >= board.dim || pos[1] >= board.dim) return false

		pos = JSON.stringify(pos);
		if (occupied.indexOf(pos) != -1) return false;
	}
	return true;
}
