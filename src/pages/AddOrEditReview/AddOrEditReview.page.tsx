import React from 'react';

import './AddOrEditReview.styles.scss';

import { useSelector } from 'react-redux';

import AddReview from '../../components/add-review/add-review.component';
import EditReview from '../../components/edit-review/edit-review.component';

import { isEditModeSelector } from '../../redux/store';

const AddOrEditReviewPage = () => {
  const isEditMode = useSelector(isEditModeSelector);

  return (
    <div className='home-container'>
      <header className='home-header'>
        <div>User Reviews</div>
      </header>
      <main className='add-or-edit-review-container'>
        {!isEditMode ? <AddReview /> : <EditReview />}
      </main>
    </div>
  );
};

export default AddOrEditReviewPage;
