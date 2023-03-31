import React, { useState, useEffect} from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import ProviderInfo from "../components/ProviderInfo";

const Mobal = () => {
  const [provider, setProvider] = useState([{},[]]);

  useEffect(() => {
    getProvider();
  },)

  async function getProvider() {
    const fetchedProvider = await axios.get('/api/provider/1');
    setProvider(fetchedProvider.data)
  }
    return (
        <div>
          <ProviderInfo provider={provider[0]} />
          <div className="main-content">

            <ReviewCard reviews={provider[1]}></ReviewCard>
          </div>
        </div>
    );
}

export default Mobal;