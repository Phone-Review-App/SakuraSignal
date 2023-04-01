import React, {useState, useEffect} from 'react';
import "./Radio.css";

const inputs = [];
// const inputs = [
//     {value:0},
//     {value:1},
//     {value:2}.
// ];

for(let i =0; i<= 10; i++){
  inputs.push({type:"radio", value: i.toString()})
}
//console.log("😀",inputs);

const Radio = ( props ) => {
  const { className, label, radioName, scoreSetter } = props;
  const [selectedRadioButton, setSelectedRadioButton] = useState('0');

  const isRadioSelected = (value) => { 
    return selectedRadioButton === value;
  }

  const handleRadioSelect = (event) => {
    setSelectedRadioButton(event.target.value)
    let score = event.target.value;
    scoreSetter(score);
        
    console.log("👽",score);
  }
    return (
        <div className={ className } >
            {
            
            inputs.map((input, index) => {
                return (
                    <label htmlFor={label} 
                    key={index}>
                        {input.value}
                        <input 
                        
                        
                    type={input.type}
                    name={radioName}
                    value={input.value}
                    checked={isRadioSelected(input.value)}
                    onChange={handleRadioSelect}
                    
                    
                    >
                    </input>
                    </label>
                    
                )
                
            })}
        </div>
    )
}

// const RadioX = () => {
    
//     const [selected, setSelected ] = useState(inputs[0].value);
//     const [isSelected, setIsSelected] = useState(true);

//     useEffect(()=>{

//     },[selected])

//     const handleOnChange = (event) => {
//         console.log("😁",event.target.value);
//         console.log("click");
//         setSelected(event.target.value);
//     }

//     return (
//         <>
//             {inputs.map((input, index) => {
//                 return (
//                     <input 
//                         key= {index}
//                         type={input.type}
//                         name={input.name}
//                         value={input.value}
//                         checked={setIsSelected(input.value)}
//                         onChange= {handleOnChange}>
//                     </input> 
//                 )
//             })}
        
        
//         </>
//     )
    
// }

Radio.defaultProps = {
    className:"",
    label:"",
    radioName:"",
    onClick: ()=> {},
    
    scoreSetter:()=>{}
}

export default Radio;

