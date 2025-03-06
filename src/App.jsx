import { useState } from 'react';
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from './components/Log';

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [activePlayer, setActivePlayer] = useState('X');
	
	function handleSelectSquare(rowIdx, colIdx) {
		setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
		setGameTurns(prevTurns => {
			let currPlayer = 'X';

			if (prevTurns.length > 0 && prevTurns[0].player ==='X') {
				currPlayer = 'O';
			}
			const updatedTurns = [
				{
					square: { row: rowIdx, col: colIdx }, 
					player: currPlayer
				}, 
				...prevTurns];

			return updatedTurns;
		});
	}

	return (
		<main>
			<div className="game-container">
				<ol className="players highlight-player">
					<Player initialName={`Player 1`} symbol={`X`} isActive={activePlayer === 'X'} />
					<Player initialName={`Player 2`} symbol={`O`} isActive={activePlayer === 'O'} />
				</ol>

				<Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
			</div>
			
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
