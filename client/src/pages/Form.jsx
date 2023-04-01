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

// this object will get sent to the server with data for database
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

    // SCORE INPUT STATE // Overall, Ease of Use, Coverage
    const [overAllScore, getOverAllScore] = useState(0);
    const setOverAllScore = (event) =>{
        getOverAllScore(event.target.value);
        console.log("😊",overAllScore);
        //reviewData.overall
    }

    const [EOUscore, getEOUScore] = useState(0);
    const setEOUScore = (score) =>{
        getEOUScore(score);
        //reviewData.ease_of_use
    }

    const [coverageScore, getCoverageScore] = useState(0);
    const setCoverageScore = (score) =>{
        getCoverageScore(score);
        //reviewData.coverage
    }

    const [priceScore, getPriceScore] = useState(0);
    const setPriceScore = (score) =>{
        getPriceScore(score);
        //reviewData.price
    }

    const [customerServicescore, getCustomerServiceScore] = useState(0);
    const setCustomerServiceScore = (score) =>{
        getCustomerServiceScore(score);
        //reviewData.
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
    const [companyName, getCompName] = useState('');
    const setCompName = (compName) => {
        getCompName(compName);
    }
    
    // COMMENT STATE
    const [comment, setComment] = useState('');

    const handleCommentInput = (event) => {
        const value = event.target.value;
        setComment(value);
        reviewData.customer_review = value;
    }

    // SERVER RESPONSE STATE
    const [serverResponse, setServerResponse] = useState('Pending')

    // HANDLER FUNCTION
    const handleSubmission = async (event) => {
        event.preventDefault();
        if (setIsSubmitted(!isSubmitted)) {
            // sends data to server after submit button is clicked
            const response = await axios.post('/api/review', reviewData)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));  
            setServerResponse(response);
        }
    };

    useEffect(() => {
        if(isSubmitted) {
            console.log(reviewData);
            // setInterval(()=>{

            // }, 5000);
        }
    },);

    
    return (
        <div>  
            {
                isSubmitted
                ? (
                    <>    
                        <Header text="Thank you for your feedback!" secondary_text={serverResponse}/>
                        <Button text="Home" onClick={() => navigate('/')} />
                    </>
                )

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

                        {<DropdownMenu />}
                        Overall:<Radio radioName="overall" onClick={setOverAllScore(overAllScore)} score={score}/>
                        Ease of Use:<Radio radioName="easeOfUse"/>
                        Coverage:<Radio radioName="coverage"/>
                        Price:<Radio radioName="price"/>
                        Customer Service:<Radio radioName="customerService"/>
                        
                        <textarea 
                            name="" 
                            id="" 
                            cols="60" 
                            rows="10" 
                            placeholder="Type your review here!"
                            value={ comment }
                            onChange={ handleCommentInput }></textarea>
                        {/* <Input 
                            placeholder="Type your review here!"
                            value={ comment }
                            onChange={ handleCommentInput }
                        /> */}
                        
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