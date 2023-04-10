import {React, useState, useEffect} from 'react';
import './Card.css'

const Card = (props) => {
  const { description, divClassName, onClick, onChange, cardName, imgClassName, img_url, altValue, averageScoreClassName ,averageScore, buttonClassName  } = props;
  /*
 
  You can console.log(className) to see what it returns
  You can also console.log(props) to see what object passed
  
  */
  const [background, setBackground] = useState('red');

  useEffect(() => {
    if (averageScore > 7) {
      setBackground('green');
    } else if (averageScore > 5) {
      setBackground('yellow');
    } else {
      setBackground('red');
    }
  }, [averageScore]);
  
  
  return (
    <>
      <div className="card">
       
        <img className ="imgClassName"
          src={img_url} 
          alt={altValue}
        />
         
         <div className="avgContainer">
          <span className={background}> { averageScore.toFixed(1) * 10 }</span>
          <p className="avgDescription"> Average as decided by our reviewers</p>
         </div>

        
        <p className="description">{description}</p>
        <button className ="detailsButton" onClick = {onClick} onChange = {onChange}>Learn More</button>
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
  averageScore: 0,
  buttonClassName: "",
};

  export default Card;
  