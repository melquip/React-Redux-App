export const loadState = (key) => {
	try {
		const serializedState = localStorage.getItem(key || 'state');
		if(serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export const saveState = (state, key) => {
	try {
		const serializedState = JSON.stringify((key ? state[key] : state));
		localStorage.setItem(key, serializedState);
	} catch (err) {
		throw new Error('Not able to set local storage: ', err);
	}
}