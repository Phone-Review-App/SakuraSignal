import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";
import AvgScores from "../components/AvgScores";
import Button from '../components/Button';
import Footer from "../components/Footer";
import "../styles/Provider.css";

const Provider = ({provider_id}) => {
  const navigate = useNavigate();
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const [provider, setProvider] = useState([{},[]]);
  const [noReviews, setNoReview] = useState(true);

  useEffect(() => {
    getProvider();
  },[provider_id])

  /**
   * Returns the providerInfo and reviews
   * @param 
   * @returns {[{ProviderInfo}, {reviews}]}
   */
  async function getProvider() {
    try{
      const fetchedProvider = await axios.get(`/api/providers/${provider_id}`, header); 
      setProvider(fetchedProvider.data);
      if(provider[1]){
        setNoReview(false);
      }

    } catch (err){
      console.error("🤮", err);
    } 
  }
  const NoReview = ({}) => {
    return (
      <>
      <div className="no-review">{`Have you use this provider before? Be the first to review this provider.\n`}</div>
      <br/>
      </>
    )
  }
    return (
      <div>
        <ProviderInfo provider={provider[0]} provider_id={provider_id}/>
        <div className="main-content">
          <div>
            <AvgScores scores={provider[0]} />
            <span className="write-review-text">Have you used this company?</span>
            <div className="button-container">
              <Button className="button-review" text="Write a Review" onClick={() => navigate(`/Form`)} /> 
              </div>
          </div>
          {noReviews ? <NoReview /> : <ReviewCard reviews={provider[1]}></ReviewCard>}
        </div>
        <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
      </div>
    );
}

export default Provider;