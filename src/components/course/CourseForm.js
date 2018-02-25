import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ allAuthors, saving, errors, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Manage Course</h1>

            <Field // 'name' prop is required in field
                name="title"
                label="Title"
                component={TextInput}
                error={errors.title}
                placeholder="Enter the course's title"
            />

            <Field
                name="authorId"
                label="Author"
                defaultOption="Select Author"
                options={allAuthors}
                component={SelectInput}
            />
           
            <Field
                name="category"
                label="Category"
                component={TextInput}
            />

            <Field
                name="length"
                label="Length"
                component={TextInput}
            />

            <button
                type="submit"
                name="submit"
                disabled={saving}
                className="btn btn-primary"
            >
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

CourseForm.propTypes = {
    handleSubmit: PropTypes.func,
    errors: PropTypes.object,
    allAuthors: PropTypes.array,
    saving: PropTypes.bool,
};

export default reduxForm({ form: 'thecourse', enableReinitialize: true })(CourseForm);
