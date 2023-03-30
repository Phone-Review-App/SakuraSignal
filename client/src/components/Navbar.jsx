import React from "react";
import Button from './Button';


const Navbar = (props) => {
    const { className, text, description, support, src, alt } = props;

    return (
        <div>
            <Button text="Home"></Button>
            <h1>{ text }</h1>
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