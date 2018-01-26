import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/courses" component={CoursesPage} />
        </Switch>
    );
};

export default Routes;