import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import NavPanel from "./NavPanel";
import "../styles/ProviderInfo.css";

const ProviderInfo = ({provider, provider_id}) => {
  const navigate = useNavigate();

  return (
    <div className='provider-hero-div'>
      <div className='provider-info'>
      <div className="provider-logo">
          <img src={provider.img_url} alt="" />
        </div>
        
        <p>English Support: {provider.english_support === true ? '✅' : '❌'}</p>
        <p>{provider.description}</p>
        <a href={provider.site_url}>Click here for the provider website.</a>
      </div>
      <div className="hero-right">
        <Button className="button" text="Home" onClick={() => navigate('/')}/>
        <div>
        <NavPanel provider_id={provider_id}/>
        </div>
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