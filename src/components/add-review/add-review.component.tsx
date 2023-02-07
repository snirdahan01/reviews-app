import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './add-review.styles.scss';

import { AppDispatch } from '../../redux/store';
import { Review, addReview } from '../../redux/reviews-slice';

import Button from '../common/button/button.component';

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Review>();

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((review: Review) => {
    dispatch(addReview(review));
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
        />
        {errors.fullName && (
          <span className='input-error'>*This field is required!</span>
        )}
        <textarea
          {...register('comment', { required: true, maxLength: 20 })}
          id='comment'
          placeholder='Your comment'
          name='comment'
        />
        {errors.comment && (
          <span className='input-error'>*This field is required!</span>
        )}
        <Button buttonText='Add' onClick={onSubmit} />
      </form>
    </Fragment>
  );
};

export default AddReview;
