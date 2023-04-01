import React from "react";

const Button = (props) => {
  const { className, onClick, text } = props;

  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        >{ text }</button>
    </div>
  );
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  text: "",
};

export default Button;