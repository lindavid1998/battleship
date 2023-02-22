export function createGameBoard() {
    let board = {};
    board.ships = [];
    board.placeShip = function (createShip, length, start) {
        board.ships.push(createShip(length, start));
    }

	return board;
}
