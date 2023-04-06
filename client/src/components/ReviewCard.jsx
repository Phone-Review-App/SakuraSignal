import {useState, useEffect, React} from 'react';
import { Divider } from '@mui/material';
import "./ReviewCard.css"

const ReviewCard = (props) => {
  const { reviews } = props;
  

  const [background, setBackground] = useState('red');
  
  let overall;

 
  useEffect(() => {
    if (overall > 7) {
      setBackground('green');
    } else if (overall > 5) {
      setBackground('yellow');
    } else {
      setBackground('red');
    }
  }, [overall]);
  

  return (
    <div className='reviews-div'>
      {
        reviews.map((review) => {
          const reviewOverall = review.overall;
          return (
            <div className='review-card'>
              <h3 className='name'>{review.reviewer_name}</h3>
              <div>
                {overall === review.overall}
                <span className={reviewOverall > 7 ? 'green' : reviewOverall > 5 ? 'yellow' : 'red'}>
                {reviewOverall * 10}
              </span>
                <span className='ease_of_use'>Ease Of Use: {review.ease_of_use}</span>
                <span className='coverage'>Coverage: {review.coverage}</span>
                <span className='price'>Price: {review.price}</span>
                <span className='customer-service'>Customer service: {review.customer_service}</span>
              </div>
         
              <Divider/>

              <p className="review-text">{review.customer_review}</p>
           
            </div>
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