import Player from './components/Player';

function App() {
  

  return (
		<main>
			<div className="game-container">
				<ol className="players">
          <Player name={`Player 1`} symbol={`X`} />
					<Player name={`Player 2`} symbol={`O`} />
				</ol>
				GAME
			</div>
			LOG
		</main>
  );
}

export default App
