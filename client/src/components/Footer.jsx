import React from "react";
import "../styles/Footer.css"

const Footer = (props) => {
  const { className, text } = props;
  
  return (
    <div className={ className }>
      <p>{ text }</p>
    </div>
  )
};

Footer.defaultProps = {
  className: "",
  text: "",
};

export default Footer;