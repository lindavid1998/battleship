export const createShip = (length, pos) => {
	let ship = {};
	ship.length = length;
	ship.numOfHits = 0;
	ship.position = [];

	let [x, y] = pos;
	for (let i = 0; i < length; i++) {
		ship.position.push([x, y]);
		x += 1;
	}

	ship.hit = function () {
		ship.numOfHits += 1;
	};

	ship.isSunk = function () {
		return ship.length <= ship.numOfHits;
	};

	return ship;
};
