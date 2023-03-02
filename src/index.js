import { game } from './game';
import { dom } from './dom';

let gameDiv = document.querySelector('.game');
dom.setup(gameDiv, game.p1);
dom.setup(gameDiv, game.p2);
