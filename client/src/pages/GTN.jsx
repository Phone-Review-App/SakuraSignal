import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";
import AvgScores from "../components/AvgScores";
import Button from '../components/Button';
import "./Provider.css";

const GTN = () => {
  const navigate = useNavigate();

  const [provider, setProvider] = useState([{},[]]);

  useEffect(() => {
    getProvider();
  },)

  async function getProvider() {

    const fetchedProvider = await axios.get('/api/provider/9'); 
    setProvider(fetchedProvider.data)
  }
    return (
        <div>
          <ProviderInfo provider={provider[0]} />
          <div className="main-content">
          <div>
            <AvgScores scores={provider[0]} />
            <span>Have you used this company?</span>
            <Button text="Write a Review" onClick={() => navigate('/Form')} />
          </div>
            <ReviewCard reviews={provider[1]}></ReviewCard>
          </div>
        </div>
    );
}

export default GTN;