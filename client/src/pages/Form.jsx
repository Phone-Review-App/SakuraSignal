import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Input from '../components/Input';

const Form = () => {
    
    const [email, setEmail] = useState('');
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };
    
    return (
        <div>
            <Navbar text="We appreciate your reviews"/>

            <Input 
                placeholder="Nickname"
            />

            <Input 
            // labelName="Email Address"
                placeholder="Email" 
                value={ email }
                OnChange={ handleEmailInput }
            />

            <Input 
                placeholder="Type your review here!"
            />

        </div>
    );
}

export default Form;