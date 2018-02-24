import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({input: { name, value, onChange }, label, defaultOption,  error, options }) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    onChange={onChange}
                    value={value}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })
                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string.isRequired,
    defaultOption: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
};

export default SelectInput;
