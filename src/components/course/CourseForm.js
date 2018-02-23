import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = (props) => {
    // console.log(props);
// const CourseForm = ({ course, allAuthors, /* onSave,  onChange, */ saving, errors, handleSubmit, onSubmit }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h1>Manage Course</h1>

            <Field // 'name' prop is required in field
                name="title"
                label="Title"
        
                // defaultValue={props.initialValues.title}
                
                // onChange={onChange}
                // error={errors.title}
                component={TextInput}

            />

            {/* <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                // onChange={onChange}
                error={errors.authorId}
            /> */}

            {/* <TextInput
                name="category"
                label="Category"
                value={course.category}
                // onChange={onChange}
                error={errors.category} /> */}

            {/* <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length} /> */}

            <button
                type="submit"
                name="submit"
                disabled={props.saving}
                className="btn btn-primary"
            // onClick={onSave}
            >
                {props.saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    // onSave: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    // onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object,
};

// export default CourseForm;
export default reduxForm({ form: 'thecourse', enableReinitialize: true })(CourseForm);
