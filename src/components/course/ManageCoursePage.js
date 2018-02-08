import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
// import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Assigning a copy so that the reference does not get passed around
            course: { ...this.props.course },
            errors: {},
            // saving: false,
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    // This lifecycle hook method will run when React THINKS that the component will receive props
    // We need to make a check in the beginning so that we don't make useless state updates
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({ course: {...nextProps.course} });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        const value = event.target.value;
        return this.setState((prevState) => ({
            course: { ...prevState.course, [field]: value },
        }));
    }

    saveCourse(event) {
        event.preventDefault();
        // this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course);
        // .then(() => this.redirect())
        // .catch(error => {
        //     toastr.error(error);
        //     this.setState({ saving: false });
        // });
        // <Redirect push to="/courses"/>;
        this.context.router.history.push('/courses');
    }

    // redirect() {
    //     this.setState({ saving: false });
    //     toastr.success('Course saved');
    //     this.context.router.push('/courses');
    // }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}
                // saving={this.state.saving}
                course={this.state.course}
            />
        );
    }
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object,
};

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

   
// const getCourseById = (courses, id) => {
//     const course = courses.filter(course => course.id == id);
//     if (course.length) return course[0];
//     return null;
// };
const getCourseById = (courses, id) => {
    const course = courses.filter(course => course.id == id);
    return course.length ? course[0] : null;
};

const mapStateToProps = (state, ownProps) => {
    const courseId = ownProps.match.params.id;

    // Initialize course in order to show an empty form when you add a new course
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        // If the courseId exists, fetch the course we want to edit
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map((author) => ({
        value: author.id,
        text: author.firstName + ' ' + author.lastName,
    }));

    return {
        course: course,
        authors: authorsFormattedForDropdown,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
