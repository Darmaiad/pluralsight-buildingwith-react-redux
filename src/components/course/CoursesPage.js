import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: '',
            },
        };

        // You can use bind when you specify the callback in the input,
        // but it will create a new function each render
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({
            course,
        });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses Page</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save"
                />
            </div>
        );
    }
}


// These two function names are optional. We can na me these functions whatever we like, or even define them inline
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
    };
}
function mapDispatchToProps(dispatch) {
    return {

        // createCourse: (course) => dispatch(courseActions.createCourse(course)),
        // Instead of the above, we can do this: 
        actions: bindActionCreators(courseActions, dispatch),
    };
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
};

// If we ommit mapDispatchToProps the component gets a dispatch prop from connect
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
