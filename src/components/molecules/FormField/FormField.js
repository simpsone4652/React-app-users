/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {Label} from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';

export const FormField = ({onChange,value,label,name,id,type = 'text', ...props}) =>{
    return(
        <>
        <Label htmlFor={id}>{label} </Label>
        <Input name={name} id={id} type={type} value={value} onChange={onChange} />
        </>
    )
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
};


export default FormField;