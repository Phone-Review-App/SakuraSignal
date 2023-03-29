import React from "react";

const Navbar = (props) => {
    const { className, text } = props;
    return (
        <div> 
            <h1>{ text }</h1>
        </div>
    )

};

Navbar.defaultProps = {
    className: "",
    text: ""
};

export default Navbar;