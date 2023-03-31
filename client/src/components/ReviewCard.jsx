import React from 'react';

const ReviewCard = (props) => {
  const { reviews } = props;
  return (
    <div className='reviews-div'>
      {
        reviews.map((review) => {
          return (
            <h3>{review.name}</h3>
            
          )
        })
      }
    </div>
  )
}

ReviewCard.defaultProps = {
  reviews: [],
  
};

export default ReviewCard;