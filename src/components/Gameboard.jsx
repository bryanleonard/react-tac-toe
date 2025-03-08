
// const initialGameBoard = [
// 	[null, null, null],
// 	[null, null, null],
// 	[null, null, null]
// ];

// export default function Gameboard({ onSelectSquare, activePlayerSymbol }) {
export default function Gameboard({ onSelectSquare, board }) {

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectedSquare(rowIndex, colIndex) {
	// 	setGameBoard((prevGameBoard) => {
	// 		// anti-pattern - objects and arrays shold not mutate directly bc they are reference values. Do a deep copy and use that.
	// 		// prevGameBoard[rowIndex][colIndex] = 'X';
	// 		// It updates the orginal value in memory beofre the scheduled state change happens.
	// 		// NO const newUser = user
	// 		// YES const newUser = { ...user }
	// 		const updatedBoard = [...prevGameBoard.map(innerArry => [...innerArry])] //deep copy of nested arrays
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// }

	// // Let's get some derive state action going...
	// let gameBoard = initialGameBoard;

	// for (const turn of turns) {
	// 	const { square, player } = turn;
	// 	const { row, col } = square;

	// 	gameBoard[row][col] = player;
	// }

	return (
		<ol className="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								{/* <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button> */}
								<button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}