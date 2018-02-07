import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/course" component={ManageCoursePage} />
            <Route path="/course/:id" component={ManageCoursePage} />
        </Switch>
    );
};

export default Routes;
