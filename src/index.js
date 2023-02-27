import { game } from './game';
import { dom } from './dom';
import { convertIndexToCoord } from './dom';

let gameDiv = document.querySelector('.game');
dom.setup(gameDiv, game.p1);
dom.setup(gameDiv, game.p2);

let gridUnits = document
	.getElementById('Computer')
	.querySelectorAll('.grid-pos');

gridUnits.forEach((unit) => {
	unit.addEventListener('click', (e) => {
		let target = convertIndexToCoord(game.p1.board.dim, e.target.id);
		game.playRound(game.p1, game.p2, dom, target);
	});
});
