import React from "react";
import { useNavigate } from "react-router-dom";
import Button from './Button';

const Navbar = (props) => {
    const { className, text, description, support, src, alt } = props;
    const navigate = useNavigate();
    return (
        <div>
            <Button 
                text="Home"
                onClick={() => navigate('/')}
                ></Button>
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