import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.page';
import AddOrEditReviewPage from './pages/AddOrEditReview/AddOrEditReview.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-review' element={<AddOrEditReviewPage />} />
      <Route path='/edit-review/:id' element={<AddOrEditReviewPage />} />
    </Routes>
  );
}

export default App;
