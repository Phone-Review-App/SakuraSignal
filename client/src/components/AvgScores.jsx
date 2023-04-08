import {React, useEffect, useState} from "react";
import "./AvgScores.css";

const AvgScores = (props) => {
  const { scores } = props;

  const [background, setBackground] = useState('red');
  const [width, setWidth] = useState('60px')
  const [easeOfUseStars, setEaseOfUseStars] = useState('');
  const [coverageStars, setCoverageStars] = useState('');
  const [priceStars, setPriceStars] = useState('');
  const [customerServiceStars, setCustomerServiceStars] = useState('');
  
  useEffect(() => {
    const overall = scores.overall;
    if (overall > 7) {
      setBackground("green");
    } else if (overall > 5) {
      setBackground("yellow");
    } else {
      setBackground("red");
    }
    if (overall === 10) {
      setWidth("80px");
    }
  }, [scores.overall]);

  
  const starGenerator = (num, setStars) => {
    let stars = '';
    while (num > 0) {
      stars += '★';
      num -= 10;
    }
    setStars(stars);
  };

  useEffect(() => {
    starGenerator(props.scores.ease_of_use * 10 / 2, setEaseOfUseStars);
    starGenerator(props.scores.coverage * 10 /2, setCoverageStars);
    starGenerator(props.scores.price * 10 /2, setPriceStars);
    starGenerator(props.scores.customer_service * 10 /2, setCustomerServiceStars);
  }, [props.scores]);
 
  return (
    <div className="scores-card">
      <p className="overall">Overall:</p>
      <p className={background} style={{ width: width }}>
        {(props.scores.overall * 10).toFixed(0)}
      </p>
      <p className="additional">Ease of Use: {easeOfUseStars}</p>
      <p className="additional">Coverage: {coverageStars}</p>
      <p className="additional">Price: {priceStars}</p>
      <p className="additional">Customer Service: {customerServiceStars}</p>
    </div>
  );
};


AvgScores.defaultProps = {
  className: "",
  text: ""
};

export default AvgScores;