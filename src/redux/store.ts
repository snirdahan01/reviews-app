import { configureStore } from '@reduxjs/toolkit'
import reviewsSlice from './reviews-slice'

const store = configureStore({
  reducer: {
    reviewsSlice: reviewsSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const reviewsSelector = (state: RootState) => state.reviewsSlice.reviews;

export const isEditModeSelector = (state: RootState) => state.reviewsSlice.isEditMode;

export default store;