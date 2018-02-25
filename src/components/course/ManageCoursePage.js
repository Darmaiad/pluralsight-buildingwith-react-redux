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

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            saving: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This lifecycle hook method will run when React THINKS that the component will receive props.
    // We need to make a check in the beginning so that we don't make useless state updates.
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.initialValues.id != nextProps.initialValues.id) {
    //         this.setState({ course: { ...nextProps.course } });
    //     }
    // }

    courseFormIsValid(courseTitle) {
        let formIsValid = true;
        let errors = {};

        if (courseTitle.length < 5) {
            errors.title = 'Title must be at least 5 characters';
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
        this.context.router.history.push('/courses');
    }

    handleSubmit(values) {
        if (!this.courseFormIsValid(values.title)) {
            return;
        }

        this.setState({ saving: true });
        this.props.actions.saveCourse(values)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                errors={this.state.errors}
                saving={this.state.saving}
                onSubmit={this.handleSubmit}
                initialValues={this.props.initialValues}
            />
        );
    }
}

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
        authors: authorMemoizedSelector(state.authors),
        // authors: authorsFormattedForDropdown(state.authors),
        errors: state.errors,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch),
});

ManageCoursePage.contextTypes = {
    router: PropTypes.object,
};

ManageCoursePage.propTypes = {
    initialValues: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
