import React from "react";

const Header = (props) => {
    const { className, text } = props;
    return (
        <div> 
            <h1>{ text }</h1>
        </div>
    )
};

Header.defaultProps = {
    className: "",
    text: ""
};

export default Header;