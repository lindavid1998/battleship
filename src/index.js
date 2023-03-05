import { game } from './game';
import { dom } from './dom';

let gameDiv = document.querySelector('.game');
dom.setup(gameDiv, game.p1);
dom.setup(gameDiv, game.p2);

let orientation = document.querySelector('.orientation')
orientation.addEventListener('click', (e) => {
	let text = e.target.textContent;
	if (text == 'Vertical') {
		e.target.textContent = 'Horizontal'
	} else {
		e.target.textContent = 'Vertical';
	}
})
