import { useState } from 'react';
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combos';
import GameOver from './components/GameOver';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

function deriveCurrPlayer(gameTurns) {
	let currPlayer = 'X';

	if (gameTurns.length > 0 && gameTurns[0].player ==='X') {
		currPlayer = 'O';
	}

	return currPlayer;
}

function App() {
	const [players, serPlayers ]= useState({
		'X': 'Player 1',
		'O': 'Player 2'
	});
	const [gameTurns, setGameTurns] = useState([]);
	// const [activePlayer, setActivePlayer] = useState('X');

	const activePlayer = deriveCurrPlayer(gameTurns);

	// Let's get some derive state action going...
	let gameBoard = [...initialGameBoard.map(arry => [...arry])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	let winner = null;
	let winnerSymbol = null;

	for (const combo of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combo[0].row][combo[0].column];
		const secondSquareSymbol = gameBoard[combo[1].row][combo[1].column];
		const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column];

		if (firstSquareSymbol && 
			firstSquareSymbol === secondSquareSymbol && 
			firstSquareSymbol === thirdSquareSymbol) {
			winnerSymbol = firstSquareSymbol;
			winner = players[firstSquareSymbol];
		}
	}

	const hasDraw = gameTurns.length === 9 && !winner;
	
	function handleSelectSquare(rowIdx, colIdx) {
		// setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
		setGameTurns(prevTurns => {
			const currPlayer = deriveCurrPlayer(prevTurns);

			const updatedTurns = [
				{
					square: { row: rowIdx, col: colIdx }, 
					player: currPlayer
				}, 
				...prevTurns];

			return updatedTurns;
		});
	}

	function handleRestart() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers(prevPlayers => {
			return {
				...players,
				[symbol]: [newName]
			}
		})
	}

	return (
		<main>
			<div className="game-container">
				<ol className="players highlight-player">
					<Player initialName={`Player 1`} symbol={`X`} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
					<Player initialName={`Player 2`} symbol={`O`} isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
				</ol>

				{(winner || hasDraw) && <GameOver winner={winner} winnerSymbol={winnerSymbol} onRestart={handleRestart} />}

				<Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
