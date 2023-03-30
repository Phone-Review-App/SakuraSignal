import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
import Button from './Button';

const options = [
    {value: "", text:"--- Select a phone provider ---"},
    {value:"AU", text:"AU" },
    {value:"Docomo", text:"Docomo" },
    {value:"GTN", text:"GTN" },
    {value:"Linemo", text:"Lineom" },
    {value:"Mobal", text:"Mobal" },
    {value:"Rakuten", text:"Rakuten" },
    {value:"Softbank", text:"Softbank" },
    {value:"UQ", text:"UQ" },
    {value:"Ymobile", text:"Ymobile" },
]

function DropdownMenu ( props ) {
const { htmlFor, labelName, selectName, required, disabled, size } = props;


   const [selected, setSelected ] = useState(options[0].value);
//const [HasChangedValue, setHasChangedValue ] = useState(false);
   useEffect (()=> {
// fixme: How to intervein "selected" so it is targeted
   },[selected]);

   const handleChangedValue = (event) => {

   } 

   const handleChange = (event) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
   };
   return (
    <>
    <div>
    <label htmlFor={htmlFor}>{labelName}</label>
        <select 
        value={selected} 
        onChange={handleChange} 
        name={selectName}
        required={required}
        disabled={disabled}
        size={size}
        >
            {options.map((option) => (
                <option 
                key={option.value}
                value={option.value} >
                    { option.text }
                </option> 
            ))}
        </select>
    </div>
    </>
   );
};





// function DropdownMenuX ( props ){

//     const [ selectOption, setSelectOption ] = useState('AU');

//     useEffect(() => {

//     })

//     const { htmlFor, labelName, selectClassName, selectName, selectid, selected, onChange, onClick } = props;
//     return (
//     <>
//     <label htmlFor={htmlFor} onChange={onChange}>{labelName}</label>
//     <select 
//     options={options}
//         className={selectClassName} 
//         name={selectName} 
//         id= {selectid} 
//         value={selected}
//     >
//         <option value="AU">AU</option>
//         <option value="Docomo">Docomo</option>
//         <option value="GTN">GTN</option>
//         <option value="Linemo">Linemo</option>
//         <option value="Mobal">Mobal</option>
//         <option value="Rakuten">Rakuten</option>
//         <option value="Softbank">Softbank</option>
//         <option value="UQ">UQ</option>
//         <option value="Ymobile">Ymobile</option>
//     </select>
//     <Button text="Submit" onClick={onClick}/>
//     </>
//     )
// }

DropdownMenu.defaultProps ={
    htmlFor: "",
    labelName:"",
    selectName:"", 
    selectid:"", 
    required:"",
    disabled:""
}

export default DropdownMenu;
