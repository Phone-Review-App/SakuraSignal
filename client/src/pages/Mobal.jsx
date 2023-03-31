import React, { useState, useEffect} from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";
import AvgScores from "../components/AvgScores";
import "./Provider.css"


const Mobal = () => {
  const [provider, setProvider] = useState([{},[]]);

  useEffect(() => {
    getProvider();
  },)

  async function getProvider() {
    // for a general provider page. replace the path with axios.get(`/api/provider/${provider_id}`)
    const fetchedProvider = await axios.get('/api/provider/1'); 
    setProvider(fetchedProvider.data)
  }
    return (
        <div>
          <ProviderInfo provider={provider[0]} />
          <div className="main-content">
            <AvgScores scores={provider[0]} />
            <ReviewCard reviews={provider[1]}></ReviewCard>
          </div>
        </div>
    );
}

export default Mobal;