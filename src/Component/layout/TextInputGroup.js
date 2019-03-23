import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({label,type,name,value,placeholder,onChange,errors}) => {
    return ( 
    <React.Fragment>
        <div>
            <label htmlFor='name'>{label}</label>
            <input
            type = {type}
            name = {name}
            placeholder = {placeholder}
            value={value}
            onChange={onChange}            
            />
        </div>
        <div>{errors}</div>
    </React.Fragment>
     );
}

TextInputGroup.propTypes = {
    label : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,    
}
 
export default TextInputGroup;