import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ input: { name, value, onChange }, label, placeholder, error }) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    input: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
    }).isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
};

export default TextInput;
