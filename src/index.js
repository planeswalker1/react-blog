import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

// Here is where the store gets mounted to the app
// It is done here since this is where react gets mounted to the dom

// create a store and pass it a rootReducer
// I added thunk as a store enhancer to allow me to return a function in action creators instead of objects
// This can be useful if it was connected to a database since now I can call the db to do something asyncronously and continue the action when its done based on the result.
const store = createStore(rootReducer, applyMiddleware(thunk));

// import Provider component to pass the store to the app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
