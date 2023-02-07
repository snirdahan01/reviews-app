import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPencilSquare } from 'react-icons/bs';
import { BsTrash } from 'react-icons/bs';

import './review.item.styles.scss';

import { AppDispatch } from '../../redux/store';
import {
  Review,
  deleteReview,
  changeIsEditMode,
} from '../../redux/reviews-slice';

import { ReviewItemInterface } from '../reviews-list/reviews-list.component';
import { Link } from 'react-router-dom';

const imgGen = require('@dudadev/random-img');

const ReviewItem: React.FC<ReviewItemInterface> = ({ review }) => {
  const [avatarURL, setReviewItem] = useState('');

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    async function getRandomImg() {
      const avatarURL = await imgGen().then((avatarURL: string) => {
        return avatarURL;
      });

      setReviewItem(avatarURL);
    }

    getRandomImg();
  }, []);

  const removeReview = (review: Review) => {
    dispatch(deleteReview(review));
  };

  return (
    <li>
      <div className='review-item-container'>
        <div className='review-container'>
          <img className='avatar-img' src={avatarURL} alt='' />
          <div className='text-container'>
            {<strong>{review.fullName}</strong>}
            {<div className='comment-overflow'>{review.comment}</div>}
          </div>
        </div>
        <div className='edit-remove-container'>
          <Link to={`edit-review/${review.id}`}>
            <BsPencilSquare
              className='edit-review'
              onClick={() => dispatch(changeIsEditMode(true))}
            />
          </Link>
          <BsTrash
            className='remove-review'
            onClick={() => removeReview(review)}
          />
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
