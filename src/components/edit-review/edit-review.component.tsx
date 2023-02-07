import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './edit-review.styles.scss';

import { AppDispatch, reviewsSelector } from '../../redux/store';
import { Review, editReview } from '../../redux/reviews-slice';

import Button from '../common/button/button.component';

const EditReview = () => {
  const params = useParams();
  const reviews = useSelector(reviewsSelector);
  const reviewToEdit = reviews.filter((review) => review.id === params.id);

  const { fullName, comment } = reviewToEdit[0] || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Review>();

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((review: Review) => {
    const payloadAction = {
      editedReview: review,
      id: reviewToEdit[0].id,
    };
    dispatch(editReview(payloadAction));
    navigate('/');
  });

  return (
    <Fragment>
      <form id='form-container'>
        <input
          {...register('fullName', { required: true, maxLength: 20 })}
          id='fullName'
          placeholder='Your name'
          name='fullName'
          defaultValue={fullName}
        />
        {errors.fullName && (
          <span className='input-error'>*This field is required!</span>
        )}
        <textarea
          {...register('comment', { required: true, maxLength: 20 })}
          id='comment'
          placeholder='Your comment'
          name='comment'
          defaultValue={comment}
        />
        {errors.comment && (
          <span className='input-error'>*This field is required!</span>
        )}
        <Button buttonText='Save' onClick={onSubmit} />
      </form>
    </Fragment>
  );
};

export default EditReview;
