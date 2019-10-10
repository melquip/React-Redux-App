import * as types from './actionTypes';
export const doggoReducer = (state, action) => {
	switch(action.type) {
		case types.SET_DOGGOS:
			return action.payload;
		default: 
			return state;
	}
}