import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
	const { doggos } = useSelector(state => state);
	return (
		<div className="doggos">
			{
				doggos.length ? doggos.map(doggo => (
					<div className="dog">
						<img src={doggo} alt="" />
					</div>
				)) : null
			}
		</div>
	);
}

export default App;
