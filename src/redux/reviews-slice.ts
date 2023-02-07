import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Review {
    id: string,
    fullName: string,
    comment: string
};

export interface ReviewToEditPayload {
    editedReview: Review,
    id: string
}

interface ReviewsSliceState {
    reviews: Review[];
    isEditMode: boolean;
}

const initialState: ReviewsSliceState = {
    reviews: [],
    isEditMode: false
};

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action: PayloadAction<Review>) => {
            state.isEditMode = false;
            state.reviews = [
                ...state.reviews,
                {
                    id: uuidv4(),
                    fullName: action.payload.fullName as string,
                    comment: action.payload.comment as string,
                }
            ]
        },
        deleteReview: (state, action: PayloadAction<Review>) => {
            state.reviews = state.reviews.filter(review => {
                return review.id !== action.payload.id;
            })
        },
        editReview: (state, action: PayloadAction<ReviewToEditPayload>) => {
            const { id } = action.payload;
            const { fullName, comment } = action.payload.editedReview;
            const reviewToEdit = state.reviews.find(review => review.id === id);
            if (reviewToEdit) {
                reviewToEdit.fullName = fullName;
                reviewToEdit.comment = comment;
            }
            state.isEditMode = false;
        },
        changeIsEditMode: (state, action: PayloadAction<boolean>) => {
            state.isEditMode = action.payload;
        }
    }
});

export const { addReview, deleteReview, editReview, changeIsEditMode } = reviewsSlice.actions;

export default reviewsSlice.reducer;
