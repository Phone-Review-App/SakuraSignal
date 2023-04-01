import React from 'react';
import "./ProviderInfo.css";
import Button from './Button';
import { useNavigate } from "react-router-dom";

const ProviderInfo = (props) => {
  const { provider } = props;

  const navigate = useNavigate();
  return (
    <div className='provider-hero-div'>
      <div className='provider-info'>
      <Button 
          text="Home"
          onClick={() => navigate('/')}
        ></Button>
        <h2>{provider.name}</h2>
        <p>English Support: {provider.english_support === true ? '✅' : '❌'}</p>
        <p>{provider.description}</p>
        <a href={provider.site_url}>Click here for the provider website.</a>

      </div>
      <div className="provider-logo">
        <img src={provider.img_url} alt="" />
      </div>
    </div>
  )
}

ProviderInfo.defaultProps = {
  divClassName: "",
  onClick: () => {},
  onChange: () => {},
  imgClassName: "",
  img_url: "",
  altValue: "",
  averageScoreClassName: "",
  averageScore: "",
  buttonClassName: "",
};

export default ProviderInfo;