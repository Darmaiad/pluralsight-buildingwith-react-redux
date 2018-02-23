import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { authorMemoizedSelector } from './../../selectors/selectors';
import { Field, reduxForm } from 'redux-form';

// import { authorsFormattedForDropdown } from './../../selectors/selectors';

// While we export default the connected component at the bottom, we also export the class here
// so we can import it as a named import when testing
// export class ManageCoursePage extends React.Component {
class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Assigning a copy so that the reference does not get passed around
            course: { ...this.props.course },
            errors: {},
            saving: false,
        };

        // this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
    }

    // This lifecycle hook method will run when React THINKS that the component will receive props
    // We need to make a check in the beginning so that we don't make useless state updates
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({ course: { ...nextProps.course } });
        }
    }

    // updateCourseState(event) {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     return this.setState((prevState) => ({
    //         course: { ...prevState.course, [field]: value },
    //     }));
    // }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title < 5) {
            errors.title = 'Title must be at least 5 characters';
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    saveCourse(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
        this.context.router.history.push('/courses');
    }

    onSubmit2(values) {
        // print the form values to the console
        console.log("VALUES: ", values);
    }

    render() {
      
        return (
            <CourseForm
                allAuthors={this.props.authors}
                // onChange={this.updateCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}
                saving={this.state.saving}
                course={this.state.course}
                onSubmit={this.onSubmit2}
                initialValues={this.props.initialValues}
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
    
    return {
        initialValues: course,
        course: course,
        authors: authorMemoizedSelector(state.authors),
        // authors: authorsFormattedForDropdown(state.authors),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

// export default reduxForm({
//     form: 'thecourse',  // a unique name for this form
// })(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
