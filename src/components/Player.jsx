import { useState, useEffect, useRef } from 'react';

export default function Player({initialName, symbol, isActive}) {
	const [ playerName, setPlayerName ] = useState(initialName);
	const [ isEditing, setIsEditing ] = useState(false);

	useEffect(() => {
    // Focus the input element when isEditing becomes true
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

	function handleEditClick() {
		setIsEditing(prevState => !prevState);
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	const inputRef = useRef(null);
	let playerContent = <span className="player-name">{playerName}</span>;
	//let buttonContent = <button onClick={() => handleEditClick(true)}>Edit</button>

	if (isEditing) {
		playerContent = <input type="text" required value={playerName} ref={inputRef} onChange={handleChange} />;
		//buttonContent = <button onClick={() => handleEditClick(false)}>Save</button>
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{playerContent}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>
				{isEditing ? 'Save' : 'Edit'}
			</button>
		</li>
	);
}