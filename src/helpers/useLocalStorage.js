export const loadState = (keys) => {
	try {
		let serializedState = null;
		if (keys.length > 0) {
			serializedState = keys.reduce((serialSt, key) => {
				serialSt[key] = localStorage.getItem(key);
				return serialSt;
			}, {})
		} else {
			serializedState = localStorage.getItem('state');
		}
		if (serializedState === null || Object.values(serializedState).includes(null)) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export const saveState = (state, keys) => {
	try {
		let serializedState = null;
		if (keys.length > 0) {
			keys.forEach(key => {
				serializedState = JSON.stringify(state[key])
				localStorage.setItem(key, serializedState);
			});
		} else {
			serializedState = JSON.stringify(state);
			localStorage.setItem('state', serializedState);
		}
	} catch (err) {
		throw new Error('Not able to set local storage: ', err);
	}
}