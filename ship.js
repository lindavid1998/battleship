export const createShip = (length) => {
    let ship = {};
    ship.length = length;
    ship.numOfHits = 0;

    ship.hit = function () {
        ship.numOfHits += 1;
    }

    ship.isSunk = function () {
        return ship.length == ship.numOfHits
    }

    return ship;
};
