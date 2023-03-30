import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Button from './Button';

// const { className } = props;
// function DropdownMenu( props ){
//     const [ display, setDisplay ] = useState( 'none');
//     function handleClick() {
//         if(display == 'none'){
//             setDisplay('block')
//         } else {
//             setDisplay('none')
//         }
//     }
//     return (<>
//         <div>
//             Hellow World!
//             { props.child }
//         </div>
//         <div style={{display:display}}>
//             { props.children }
//         </div>
//         </>)
// }
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

const MyComponent = () => (<Select options= {options} />)
    

        

function DropdownMenu ( props ){
    const { htmlFor, labelName, selectClassName, selectName, selectid, selected, onChange, onClick } = props;
    return (
    <>
    <label htmlFor={htmlFor} onChange={onChange}>{labelName}</label>
    <select 
        className={selectClassName} 
        name={selectName} 
        id= {selectid} 
        value={selected}
    >
        <option value="AU">AU</option>
        <option value="Docomo">Docomo</option>
        <option value="GTN">GTN</option>
        <option value="Linemo">Linemo</option>
        <option value="Mobal">Mobal</option>
        <option value="Rakuten">Rakuten</option>
        <option value="Softbank">Softbank</option>
        <option value="UQ">UQ</option>
        <option value="Ymobile">Ymobile</option>
    </select>
    <Button text="Submit" onClick={onClick}/>
    </>
    )
}

DropdownMenu.defaultProps ={
    htmlFor: "",
    labelName:"",
    selectClassName:"",
    selected:"",
    selectName:"", 
    selectid:"", 
    onChange: ()=> {}, 
    onClick: ()=>{}
}

export { DropdownMenu, MyComponent }
