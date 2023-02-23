export function createGameBoard() {
	let board = {};
	board.ships = []; // array of Ships
	board.occupied = []; // array of coordinates occupied by ships
	board.placeShip = function (createShip, length, start) {
		// create ship
		let ship = createShip(length, start);

		// add ship to board if positions are unoccupied
		if (isShipPositionValid(board.occupied, ship.position)) {
			board.occupied = board.occupied.concat(ship.position);
			board.ships.push(ship);
		}
	};

	return board;
}

function isShipPositionValid(occupied, shipPos) {
	occupied = JSON.stringify(occupied);
	for (let i = 0; i < shipPos.length; i++) {
		let pos = JSON.stringify(shipPos[i]);
		if (occupied.indexOf(pos) != -1) return false;
	}
	return true;
}
