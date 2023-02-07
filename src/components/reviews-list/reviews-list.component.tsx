import { useSelector } from 'react-redux';
import { reviewsSelector } from '../../redux/store';
import { Review } from '../../redux/reviews-slice';

import './reviews-list.styles.scss';

import ReviewItem from '../review-item/review-item.component';

export interface ReviewItemInterface {
  review: Review;
}

const ReviewsList = () => {
  const reviews = useSelector(reviewsSelector);

  return (
    <ul className='reviews-list-ul'>
      {reviews.map((review) => {
        const reviewItemProps: ReviewItemInterface = {
          review,
        };
        return <ReviewItem {...reviewItemProps} key={review.id} />;
      })}
    </ul>
  );
};

export default ReviewsList;
