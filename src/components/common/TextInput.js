import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
// const TextInput = ({ input: { name, onChange }, label, placeholder, defaultValue, value,  error, ...rest }) => {
    console.log(props);
    let wrapperClass = 'form-group';
    // if (error && error.length > 0) {
    //     wrapperClass += " " + 'has-error';
    // }

    return (
        <div className={wrapperClass}>
            {/* <label htmlFor={name}>{label}</label> */}
            <div className="field">
                <input
                    type="text"
                    name={props.name}
                    className="form-control"
                    // placeholder={placeholder}
                    
                    value={props.input.value}
                    onChange={props.input.onChange}
                />
                {/* {error && <div className="alert alert-danger">{error}</div>} */}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string,
};

export default TextInput;
