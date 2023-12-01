import React, {useState} from 'react';
import "./Radio.css";

const inputs = [];
for(let i =0; i<= 10; i++){
  inputs.push(`${i}`)
}

const Radio = ( { className, radioName, scoreSetter } ) => {
  
  const [selected, setSelected] = useState(0);

  const isRadioSelected = (value) => { 
    return selected === value;
  }

  const handleRadioSelect = (event) => {
    setSelected(event.target.value)
    scoreSetter(event.target.value);
  }
  
    return (
      <><div>{radioName}: {selected}</div>
        <div >
            { 
              inputs.map((i)=>{
                return (
                  <span key={`radio_${i}`} className={className}>
                <label htmlFor={radioName}>{i}</label>
                <br />
                <input
                  id={`radioName${i}`}
                  type={"radio"}
                  name={radioName}
                  value={`${i}`}
                  checked={isRadioSelected(i)}
                  onChange={handleRadioSelect}
                >
                </input>
                </span>
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

