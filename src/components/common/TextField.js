import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextField = ({
	id,
    name,
    placeholder,
    value,
    required,
    type,
    info,
    error,
    onChange,
    disabled
}) => {
    return (
        <div className="textfield-wrap">
            <input
				id={id}
                type={type}
                className={classnames('textfield-control field-control-lg', {
                    'is-invalid': error
                })}
                name={name}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextField.protoTypes = {
	id:PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

TextField.defaultPropTypes = {
    type: 'text'
};

export default TextField;