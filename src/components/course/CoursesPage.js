import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        this.context.router.history.push('/course');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1>Courses Page</h1>
                </div>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

// These two function names are optional. We can name these functions whatever we like, 
// or even define them inline as anonymous functions
const mapStateToProps = (state, ownProps) => { 
    return {
        courses: state.courses,
    };
};

const mapDispatchToProps = (dispatch) => ({
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    // Instead of the above, we can do this: 
    actions: bindActionCreators(courseActions, dispatch),
});

CoursesPage.contextTypes = {
    router: PropTypes.object,
};

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
};

// If we ommit mapDispatchToProps the component gets a dispatch prop from connect
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
