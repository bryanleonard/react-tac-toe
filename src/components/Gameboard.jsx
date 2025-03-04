
import { useState } from 'react';

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

export default function Gameboard() {

	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleSelectedSquare(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			// anti-pattern - objects and arrays shold not mutate directly bc they are reference values. Do a deep copy and use that.
			// prevGameBoard[rowIndex][colIndex] = 'X';
			// It updates the orginal value in memory beofre the scheduled state change happens.
			// NO const newUser = user
			// YES const newUser = { ...user }
			const updatedBoard = [...prevGameBoard.map(innerArry => [...innerArry])] //deep copy of nested arrays
			updatedBoard[rowIndex][colIndex] = 'X'
			return updatedBoard;
		});
	}

	return (
		<ol className="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}