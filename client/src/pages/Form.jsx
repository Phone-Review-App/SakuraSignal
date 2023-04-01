import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import "./Form.css"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // NICKNAME STATE
    const [nickname, setNickname] = useState('');

    const handleNicknameInput = (event) => {
        setNickname(event.target.value);
    }

    // EMAIL STATE
    const [email, setEmail] = useState('');

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    // COMMENT STATE
    const [comment, setComment] = useState('');

    const handleCommentInput = (event) => {
        setComment(event.target.value);
    }

    // HANDLER FUNCTION
    const handleSubmission = (event) => {
        event.preventDefault();
        if (setIsSubmitted(!isSubmitted)) {

        }
    };

    useEffect(() => {
        console.log(email);
        if(isSubmitted){
            setInterval(()=>{

            }, 5000);
        }
    }, [email]);

    
    return (
        <div>  
            {
                isSubmitted
                ? (<Header text="Thank you for your feedback!"/>)
                : (
                    <>
                        <Navbar text="We appreciate your reviews"/>
                        
                        <Input 
                            placeholder="Nickname"
                            value ={ nickname } 
                            onChange={ handleNicknameInput }
                        />

                        <Input 
                            placeholder="Email" 
                            value={ email }
                            onChange={ handleEmailInput }
                        />

                        <Input 
                            placeholder="Type your review here!"
                            value={ comment }
                            onChange={ handleCommentInput }
                        />
                        
                        <Button
                            text="Submit"
                            onClick = { handleSubmission }
                        />
                    </>
                )
            }
        </div>
    );
}

export default Form;