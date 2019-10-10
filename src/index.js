import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as reducers from './state/reducers';
import * as storage from './helpers/useLocalStorage';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

const store = createStore(
	combineReducers({
		doggos: reducers.doggosReducer,
	}),
	storage.loadState('doggos'),
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

store.subscribe(throttle(() => {
	storage.saveState(store.getState(), 'doggos')
}, 1000));


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

