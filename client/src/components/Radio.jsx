import React, {useState} from 'react';
import "./Radio.css";

const inputs = [];

for(let i =0; i<= 10; i++){
  inputs.push({id:`radio${i}`, type:"radio", value: i.toString()})
}

const Radio = ( { className, radioName, scoreSetter } ) => {
  
  const [selectedRadioButton, setSelectedRadioButton] = useState('0');

  const isRadioSelected = (value) => { 
    return selectedRadioButton === value;
  }

  const handleRadioSelect = (event) => {
    setSelectedRadioButton(event.target.value)
    let score = event.target.value;
    scoreSetter(score);
  }
    return (
      <><div>{radioName}: {selectedRadioButton}</div>
        <div >
            {
            inputs.map((input, index) => {
                
                return (
                <>
                  <span className={className} 
                  key={`input.id${radioName}`}
                  >
                    <label htmlFor={radioName}>
                    {input.value}
                    </label>
                    <br />
                    <input 
                      id={`${radioName}${index}`}
                      type={input.type}
                      name={radioName}
                      value={input.value}
                      checked={isRadioSelected(input.value)}
                      onChange={handleRadioSelect}
                    >
                    </input>
                    </span>
                    </>
                )
            })
            
            }
            </div>
        </>
    )
}

Radio.defaultProps = {
    className:"",
    
    radioName:"",
    onClick: ()=> {},
    
    scoreSetter:()=>{}
}

export default Radio;

