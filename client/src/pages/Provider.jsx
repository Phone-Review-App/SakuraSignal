import React, { useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";
import AvgScores from "../components/AvgScores";
import Button from '../components/Button';
import Footer from "../components/Footer";
import "./Provider.css";


const Provider = (props) => {

  const {providerId} = props;
  
  // rooting
  const navigate = useNavigate();
  
  const [provider, setProvider] = useState([{},[]]);

  useEffect(() => {
    getProvider();
  },)

  /**
   * Returns the providerInfo and reviews
   * @param 
   * @returns {[{ProviderInfo}, {reviews}]}
   */
  async function getProvider() {
    const fetchedProvider = await axios.get(`/api/providers/${providerId}`); 
    setProvider(fetchedProvider.data)
  }

    return (
      <div>
        <ProviderInfo provider={provider[0]} />
        <div className="main-content">
          <div>
            <AvgScores scores={provider[0]} />
            <span className="write-review-text">Have you used this company?</span>
            <div className="button-container">
              <Button className="button-review" text="Write a Review" onClick={() => navigate('/Form')} /> 
              </div>
          </div>
          <ReviewCard reviews={provider[1]}></ReviewCard>
        </div>
        <Footer className="footer" text="© 2023 Phone Carrier Review App"/>
      </div>
    );
}

export default Provider;