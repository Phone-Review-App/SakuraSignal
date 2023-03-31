import React from 'react';
import "./ProviderInfo.css";

const ProviderInfo = (props) => {
  const { provider } = props
  return (
    <div className='provider-hero-div'>
      <div className='provider-info'>
        <h2>{provider.name}</h2>
        <p>English Support: {provider.english_support === true ? '✅' : '❌'}</p>
        <p>{provider.description}</p>

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