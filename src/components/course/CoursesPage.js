import React, { PropTypes } from 'react';
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
        // Dispatch was passed by connect() because it found no mapDispatchToProps
        this.props.createCourse(this.state.course);
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

CoursesPage.propTypes = {
    createCourse: PropTypes.func,
    courses: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: (course) => dispatch(courseActions.createCourse(course)),
    };
}

// If we ommit mapDispatchToProps the component gets a dispatch prop from connect
export default connect(mapStateToProps)(CoursesPage);