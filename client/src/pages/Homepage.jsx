import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles/Homepage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import providersJSON from '../data/providers.json'

const Homepage = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getProviders();
  },[])

  async function getProviders() {
    const fetchedProviders = await axios.get('/api/providers');
    setProviders(fetchedProviders.data);
  }
 
  const navigate = useNavigate();

  return (
    <>
      <Header
        className="header" 
        text="SakuraSignal🌸" 
        secondary_text="Grading the mobile providers in Japan">
      </Header>

      <div className="grid-container">
        {
          providers.map((provider, index) => {
            return (
              <Card 
              key={index+20}
                cardName={provider.name}
                img_url={provider.img_url}
                averageScore={provider.overall}
                english_support={provider.english_support}
                site_url={provider.site_url}
                description={provider.description}
                onClick={() => navigate(providersJSON[index].path)}
                buttonClassName="button"
              />
            )
          })
        }
      </div>
      <Footer className="footer" text="© 2023 SakuraSignal"/>
    </>
  );
};

export default Homepage;