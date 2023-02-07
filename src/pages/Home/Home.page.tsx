import React from 'react';

import './Home.styles.scss';

import ReviewsList from '../../components/reviews-list/reviews-list.component';

import Button from '../../components/common/button/button.component';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <header className='home-header'>
        <div>User Reviews</div>
      </header>
      <main className='review-list-container'>
        <ReviewsList />
        <Link to='/add-review'>
          <Button buttonText='Add Review' />
        </Link>
      </main>
    </div>
  );
}

export default Home;
