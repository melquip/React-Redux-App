import * as types from './actionTypes';
export const setDoggos = (doggoList) => {
	return {
		type: types.SET_DOGGOS,
		payload: doggoList
	}
}
export const getDoggos = () => dispatch => {
	axios.get('https://random.dog/doggos')
		.then(({ data }) => {
			dispatch(setDoggos(data));
		})
		.catch(err => console.error('Oh no! Where are all my doggos?', err))
}