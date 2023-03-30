import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Button from './Button';

const options = [
    {value:"AU", label:"AU" },
    {value:"Docomo", label:"Docomo" },
    {value:"GTN", label:"GTN" },
    {value:"Linemo", label:"Lineom" },
    {value:"Mobal", label:"Mobal" },
    {value:"Rakuten", label:"Rakuten" },
    {value:"Softbank", label:"Softbank" },
    {value:"UQ", label:"UQ" },
    {value:"Ymobile", label:"Ymobile" },
]

function MyComponent ( props ) {
    const {onClick} = props;
    return (
    <>
    <Select options= {options} 
    />
    <Button text="MyComponentsSubmit" onClick={onClick}/>
    </>
    
)}

MyComponent.defaultProps ={
    onClick: ()=> {}
}

export default MyComponent;