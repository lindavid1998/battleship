import { game } from './game';
import { dom, convertIndexToCoord, getOrientation } from './dom';
import './style.css';

let gameDiv = document.querySelector('.game');
dom.setup(gameDiv, game.p1);
dom.setup(gameDiv, game.p2);

let orientation = document.querySelector('.orientation');
orientation.addEventListener('click', (e) => {
	let text = e.target.textContent;
	if (text == 'Vertical') {
		e.target.textContent = 'Horizontal';
	} else {
		e.target.textContent = 'Vertical';
	}
});

let playerBoard = document.querySelector('#You.board')
let gridPos = playerBoard.querySelectorAll('.grid-pos');
gridPos.forEach((pos) => {
	pos.addEventListener('mouseenter', toggleHoverEffect);
});

document.querySelector('.reset').addEventListener('click', () => {
	window.location.reload();
})

function toggleHoverEffect() {
	// remove any existing hover effects
	gridPos.forEach((pos) => pos.classList.remove('placeholder'));

	let isHorizontal = getOrientation();
	let dim = game.p1.board.dim;
	let shipLength = game.shipLengths[0];

	// get index of child
	let parent = this.parentNode;
	let index = Array.prototype.indexOf.call(parent.children, this);

	if (isHorizontal && isWithinHorizonRange(dim, index, shipLength)) {
		for (let i = index; i < index + shipLength; i++) {
			parent.children[i].classList.add('placeholder');
		}
	} else if (!isHorizontal && isWithinVertRange(dim, index, shipLength)) {
		for (let i = index; i < index + dim * shipLength; i = i + dim) {
			parent.children[i].classList.add('placeholder');
		}
	}
}

function isWithinHorizonRange(dim, index, shipLength) {
	let start = convertIndexToCoord(dim, index)[1];
	let end = convertIndexToCoord(dim, index + shipLength - 1)[1];
	return start == end;
}

function isWithinVertRange(dim, index, shipLength) {
	let start = convertIndexToCoord(dim, index + (shipLength - 1) * dim)[1];
	return start < dim;
}
