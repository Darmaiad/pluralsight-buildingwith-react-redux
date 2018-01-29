import React from 'react';
import Header from './common/Header';
import Routes from './../routes';

export default class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <Header />
                <Routes />
            </div>
        )
    }
}
