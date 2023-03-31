import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Homepage.css';
import Card from '../components/Card'


const Homepage = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders();
  },[])

  async function getProviders() {
    const fetchedProviders = await axios.get('/api/providers');
    setProviders(fetchedProviders.data)
  }

  return (
    <div className="grid-container">
      {
        providers.map((provider) => {
          return (
            <Card 
              cardName={provider.name}
              img_url={provider.img_url}
              averageScore={provider.overall}
              english_support={provider.english_support}
              site_url={provider.site_url}
              description={provider.description}
            />
          )
        })
      }
    </div>
  );
};

export default Homepage;