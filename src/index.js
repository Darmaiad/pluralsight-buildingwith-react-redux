import 'babel-polyfill'; // Should import only the polyfiils for the features we need.
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store/configureStore';

// Webpack can import CSS files too
import './styles/styles.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
