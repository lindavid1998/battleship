export const createShip = (length, pos, isHorizontal = true) => {
	let ship = {};
	ship.length = length;
	ship.numOfHits = 0;
	ship.position = [];

	let [x, y] = pos;
	for (let i = 0; i < length; i++) {
		ship.position.push([x, y]);
		if (isHorizontal) {
			x += 1;
		} else {
			y += 1;
		}
	}

	ship.hit = function () {
		ship.numOfHits += 1;
	};

	ship.isSunk = function () {
		return ship.length <= ship.numOfHits;
	};

	return ship;
};
