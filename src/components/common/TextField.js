import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextField = ({
    name,
    value,
    type,
	
    placeholder,
    required,
	classname,
    disabled,	
    onChange,
	
    info,
    error
}) => {
    return (
        <div className="textfield-wrap">
            <input
                name={name}
                value={value}
                type={type}
                required={required}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}				
                className={
					classnames(classname, 'textfield-control field-control-lg', {'is-invalid': error})
				}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextField.propTypes = {	
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,	
    placeholder: PropTypes.string,
	required: PropTypes.bool,
	classname: PropTypes.string,
    disabled: PropTypes.string,
    onChange: PropTypes.func,	
    info: PropTypes.string,
    error: PropTypes.string
};

TextField.defaultPropTypes = {
    type: 'text'
};

export default TextField;