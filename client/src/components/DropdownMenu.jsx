import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
import Button from './Button';

const options = [
    {value: "", text:"--- Select a phone provider ---"},
    {value:"AU", text:"AU", id: 1 },
    {value:"Docomo", text:"Docomo" , id: 2 },
    {value:"GTN", text:"GTN", id: 3 },
    {value:"LINEMO", text:"LINEMO", id: 4 },
    {value:"Mobal", text:"Mobal", id: 5 },
    {value:"Rakuten", text:"Rakuten" , id: 6},
    {value:"Softbank", text:"Softbank" , id: 7},
    {value:"UQ", text:"UQ" , id: 8},
    {value:"Ymobile", text:"Ymobile" , id: 9},
]

function DropdownMenu ( props ) {
const { htmlFor, labelName, selectName, selectid, required, disabled, size } = props;


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
    let company=event.target.value;
    console.log("company:",company);
   };
   return (
    <>
    <div>
    <label htmlFor={htmlFor}>{labelName}</label>
        <select 
        value={selected} 
        onChange={handleChange} 
        name={selectName}
        id={selectid}
        required={required}
        disabled={disabled}
        size={size}
        >
            {options.map((option) => (
                <option 
                key={option.value}
                value={option.id} >
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
    disabled:"",
    size:1
}

export default DropdownMenu;
