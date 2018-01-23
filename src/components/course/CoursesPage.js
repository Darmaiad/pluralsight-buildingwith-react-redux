import React, {PropTypes} from 'react';
import { Link } from 'react-router';

export default class CoursesPage extends React.Component {
    render () {
        return (
            <div>
              <h1>Courses Page</h1>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    children: PropTypes.object.isRequired
};