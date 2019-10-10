import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useActions from './helpers/useActions';
import * as actionCreators from './state/actionCreators';

function App() {
	const { doggos } = useSelector(state => state);
	const [getDoggos] = useActions([actionCreators.getDoggos]);
	useEffect(() => {
		if (doggos.length === 0) {
			getDoggos()
		}
		return () => { };
	}, [])
	const doggoImages = doggos.length ? doggos.map(doggo => {
		return (
			<img
				key={doggo}
				className="dog hidden"
				src={"https://random.dog/" + doggo}
				title={doggo}
				alt={doggo}
				onLoad={(e) => e.target.classList.remove('hidden')} />
		)
	}) : [];
	const columns = 5;
	const maxDoggoImgs = 100;
	let currDoggoColumn = 0;
	const doggoColumns = doggoImages.length ? doggoImages.reduce((finalColumns, doggoImg, doggoIndex) => {
		if ((doggoIndex) % (maxDoggoImgs / columns) === 0) {
			finalColumns.push([]);
			if (doggoIndex !== 0) {
				currDoggoColumn++;
			}
			//console.log('created new column', finalColumns)
		}
		//console.log('adding new imgs to', finalColumns[currDoggoColumn])
		finalColumns[currDoggoColumn] = finalColumns[currDoggoColumn].concat(doggoImg);
		return finalColumns;
	}, []) : [];

	console.log("\n\n\n\n\nFinal:", doggoColumns);
	return (
		<div className="doggos">
			{
				doggoColumns.map(column => (
					<div className="column">
						{
							column.map(img => img)
						}
					</div>
				))
			}
		</div>
	);
}

export default App;
