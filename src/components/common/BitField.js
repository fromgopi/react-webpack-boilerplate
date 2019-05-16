import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const BitField = ({
    name,
    type,
	checked,
	
    value,
    required,
	classname,
	displaytext,
    disabled,	
    onChange
}) => {
    return (
        <div className="bitfield-wrap">
            <input
                name={name}
                type={type}
				
				defaultChecked={checked}
                required={required}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={
					classnames(classname, 'bitfield-control field-control-lg')
				}
			/>{displaytext}
        </div>
    );
};

BitField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,	
    value: PropTypes.string,
	required: PropTypes.bool,
	classname: PropTypes.string,
	displaytext: PropTypes.string,
    disabled: PropTypes.bool,	
    onChange: PropTypes.func
};

BitField.defaultPropTypes = {
    type: 'checkbox'
};

export default BitField;