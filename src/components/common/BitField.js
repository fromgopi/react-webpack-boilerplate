import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const BitField = ({
	id,
    name,
	checked,
    value,
    required,
	text,
    type,
    info,
    error,
    onChange,
    disabled
}) => {
    return (
        <div className="bitfield-wrap">
            <input
				id={id}
                type={type}
                className={classnames('bitfield-control field-control-lg', {
                    'is-invalid': error
                })}
				defaultChecked={checked}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                disabled={disabled}
			/>{text}
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

BitField.protoTypes = {
	id:PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
	checked: PropTypes.bool,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

BitField.defaultPropTypes = {
    type: 'checkbox'
};

export default BitField;