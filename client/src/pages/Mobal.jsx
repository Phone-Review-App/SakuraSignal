import React, { useState, useEffect} from "react";
import axios from "axios";

const Mobal = () => {
  const [provider, setProvider] = useState([]);

  useEffect(() => {
    getProviders();
  },)

  async function getProvider1() {
    const fetchedProvider = await axios.get('/api/provider/1');
    setProvider(fetchedProvider.data)
  }
    return (
        <div></div>
    );
}

export default Mobal;