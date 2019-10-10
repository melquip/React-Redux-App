import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import * as reducers from './state/reducers';
import throttle from 'lodash/throttle';
import * as storage from './helpers/useLocalStorage';

const store = createStore(
	combineReducers({
		doggos: reducers.doggosReducer
	}),
	storage.loadState('doggos'),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
	storage.saveState(store.getState(), 'doggos')
}, 1000));


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

