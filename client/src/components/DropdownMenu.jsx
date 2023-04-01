import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import Button from './Button';
import "./DropdownMenu.css";

const options = [
  {value: "", text:"--- Select a phone provider ---"},
  {value:"AU", text:"AU", provider_id:3 },
  {value:"Docomo", text:"Docomo" , provider_id:2},
  {value:"GTN", text:"GTN", provider_id:9 },
  {value:"LINEMO", text:"LINEMO",provider_id:6 },
  {value:"Mobal", text:"Mobal", provider_id:1 },
  {value:"Rakuten", text:"Rakuten", provider_id:5 },
  {value:"Softbank", text:"Softbank", provider_id:4 },
  {value:"UQ", text:"UQ", provider_id:8 },
  {value:"Ymobile", text:"Ymobile", provider_id:7 },
];

function DropdownMenu ( props ) {
  const { className, htmlFor, labelName, selectName, selectid, required, disabled, size, setProviderId } = props;


  const [selected, setSelected ] = useState(options[0].value);
  //const [HasChangedValue, setHasChangedValue ] = useState(false);
  
  useEffect (()=> {
  // fixme: How to intervein "selected" so it is targeted
  },[selected]);

  // const handleChangedValue = (event) => {
  // } 

  const handleChange = (event) => {
  // console.log(event.target.value);
  setSelected(event.target.value);
  let company=event.target.value;
  console.log("company:",company);
  setProviderId(company);
  
  };
  return (
    <>
      <div>
      <label htmlFor={htmlFor}>{labelName}</label>
        <select
          className={ className } 
          value={selected} 
          onChange={handleChange} 
          name={selectName}
          id={selectid}
          required={required}
          disabled={disabled}
          size={size}
        >
        {options.map((option, index) => (
          <option 
            key={index}
            value={option.provider_id} 
            provider_id={option.provider_id}>
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
    className: "",
    htmlFor: "",
    labelName:"",
    selectName:"", 
    selectid:"", 
    required:"",
    disabled:"",
    size:1
}

export default DropdownMenu;
