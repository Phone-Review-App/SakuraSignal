import React from 'react';
const Card = (props) => {
    const { divClassName, onClick, onChange, cardName, imgClassName, img_url, altValue, averageScoreClassName ,averageScore, buttonClassName  } = props;
    /*
    You can console.log(className) to see what it returns
    You can also console.log(props) to see what object passed
    
    */
    //console.log("😀",value);
    //console.log("😍",props);
    return (
      <>
        <div
          className = {divClassName}
          onClick = {onClick}
          onChange = {onChange}
        >
          
          { cardName }
          <br/>
          <span ClassName= {averageScoreClassName} > Average Score:{ averageScore }</span>
          <br />
          <img className = {imgClassName}
            src= {img_url} 
            alt= {altValue}
        /><br />
          <button className = {buttonClassName}>Details</button>
          </div>
      </>
    );
  };
  
  Card.defaultProps = {
    divClassName: "",
    onClick: () => {},
    onChange: () => {},
    imgClassName: "",
    img_url: "",
    altValue: "",
    averageScoreClassName: "",
    averageScore: "",
    buttonClassName: "",
  };

  export default Card;
  