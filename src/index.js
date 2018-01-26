import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill'; // Should import only the polyfiils for the features we need.
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

// Webpack can import CSS files too
import './styles/styles.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
