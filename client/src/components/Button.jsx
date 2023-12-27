import React, {useEffect, useMemo, useRef} from "react";
import "../styles/Button.css";

const Button = ({ className, onClick, text, ref }) => {
  const btnref = useRef(null)
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
  },[className]);
  useEffect(()=>{
    if(ref){
      btnref.current = ref;
    } else {
      btnref.current = null;
    }
  },[ref])

  return (
    <button
      className={classNameData.default}
      onClick={onClick}
      ref={btnref}
      >{ text }</button>
  );
};

Button.defaultProps = {
  className: "default_btn",
  onClick: () => {},
  text: "",
  ref: null
};

export default Button;