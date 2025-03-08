export default function GameOver({ winner, winnerSymbol, onRestart }) {
	return (
		<div id="game-over" className="game-over">
			<h2>Game Over</h2>
			{winner && <><p><strong>{winnerSymbol}</strong> wins!</p><p>Nice job, {winner}!</p></>}
			{!winner && <p>It's a draw!</p>}
			<p>
				<button onClick={onRestart}>Rematch!</button>
			</p>
		</div>
	);
}
