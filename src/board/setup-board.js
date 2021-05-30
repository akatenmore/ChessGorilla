import createBoardArray from './create-board.js';

export default function setupBoard() {
	createBoardArray('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
	global.moveList = [];
	global.logList = [];
	global.moveList.push('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
}
