import React, {useMemo} from "react";
import "../styles/Button.css";

const Button = ({ className, onClick, text, ref }) => {
  const classNameData = useMemo(()=>{
    if(className){
      return {
        "default": `${className}`
      }
    } else {
      return {
        "default": "button"
      }
    }
  },[className])

  return (
    <button
      className={classNameData.default}
      onClick={onClick}
      >{ text }</button>
  );
};

Button.defaultProps = {
  className: "default_btn",
  onClick: () => {},
  text: "",
};

export default Button;