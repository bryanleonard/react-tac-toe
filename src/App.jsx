import Player from './components/Player';
import Gameboard from './components/Gameboard';

function App() {
  

  return (
		<main>
			<div className="game-container">
				<ol className="players">
          <Player initialName={`Player 1`} symbol={`X`} />
					<Player initialName={`Player 2`} symbol={`O`} />
				</ol>
				
        <Gameboard />
        
			</div>
			LOG
		</main>
  );
}

export default App
