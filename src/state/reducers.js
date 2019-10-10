import * as types from './actionTypes';
const initialDoggos = [];
export const doggosReducer = (state = initialDoggos, action) => {
	switch(action.type) {
		case types.SET_DOGGOS:
			return action.payload;
		default: 
			return state;
	}
}