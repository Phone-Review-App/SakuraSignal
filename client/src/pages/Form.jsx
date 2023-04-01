import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import DropdownMenu from '../components/DropdownMenu';
import Radio from '../components/Radio';
import "./Form.css";

const reviewData = {
    provider_id: "", 
    reviewer_name: "", 
    email: "", 
    overall: "", 
    ease_of_use: "", 
    coverage: "", 
    price: "", 
    customer_service: "", 
    customer_review: ""
};

const Form = () => {
    const navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

    // SCORE INPUT STATE
    const [score, getScore] = useState(0);
    const setScore = () =>{
        getScore(score);
    }
    
    // NICKNAME STATE
    const [nickname, setNickname] = useState('');

    const handleNicknameInput = (event) => {
        const value = event.target.value;
        setNickname(value);
        reviewData.reviewer_name = value;
    }

    // EMAIL STATE
    const [email, setEmail] = useState('');

    const handleEmailInput = (event) => {
        const value = event.target.value;
        setEmail(value);
        reviewData.email = value;
    }

    // DROP DOWN MENU STATE
    const [compName, getCompName] = useState('');
    const setCompName = () => {
        getCompName(compName);
    }
    
    // COMMENT STATE
    const [comment, setComment] = useState('');

    const handleCommentInput = (event) => {
        const value = event.target.value;
        setComment(value);
        reviewData.customer_review = value;
    }

    // HANDLER FUNCTION
    const handleSubmission = async (event) => {
        event.preventDefault();
        if (setIsSubmitted(!isSubmitted)) {
            // sends data to server after submit button is clicked
            await axios.post('/api/review', reviewData)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));  
        }
    };

    useEffect(() => {
        if(isSubmitted) {
            console.log(reviewData);
            // setInterval(()=>{

            // }, 5000);
        }
    }, [email]);

    
    return (
        <div>  
            {
                isSubmitted
                ? (
                    <>    
                        <Header text="Thank you for your feedback!"/>
                        <Button text="Home" onClick={() => navigate('/')} />
                    </>
                )

                : (
                    <>
                        <Navbar text="We appreciate your reviews"/>
                        {<DropdownMenu />}
                        <Radio />
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