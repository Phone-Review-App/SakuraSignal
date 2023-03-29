import React from "react";
import Button from './Button';


const Navbar = (props) => {
    const { className, text, description, support, src, alt } = props;

    return (
        <div>
            <h1>{ text }</h1>
            <Button text="Home"></Button>
            <img src={ src } alt={ alt }/>       
            <p>{ description }</p>
            <p>{ support }</p>
        </div>
    )
};

Navbar.defaultProps = {
    className: "",
    text: "",
    description: "",
    support: "",
    src: "",
    alt: "",
};

export default Navbar;