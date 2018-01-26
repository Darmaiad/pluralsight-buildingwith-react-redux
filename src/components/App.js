import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Routes from './../routes';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './about/AboutPage';


export default class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <Header />
                <Routes />
                {/* <Route path="/about" component={AboutPage} /> */}

            </div>
        );
    }
}

App.propTypes = {
    // children: PropTypes.object.isRequired,
};