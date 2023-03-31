import React, { useState, useEffect} from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const Mobal = () => {
  const [provider, setProvider] = useState([]);

  useEffect(() => {
    getProvider();
  },)

  async function getProvider() {
    const fetchedProvider = await axios.get('/api/provider/1');
    setProvider(fetchedProvider.data)
  }
    return (
        <div>
          <ReviewCard reviews={provider[1]}></ReviewCard>
        </div>
    );
}

export default Mobal;