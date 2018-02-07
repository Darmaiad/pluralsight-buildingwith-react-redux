// Polyfills should ALWAYS be on the top of the top level component
import 'babel-polyfill'; // Should import only the Polyfills for the features we need.
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

// Webpack can import CSS files too
import './styles/styles.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './favicon.ico';
const store = configureStore();

// The store is configured above. 
// Once the store is configured we can dispatch actions against it.
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
