import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../reducers/comments';

export default configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
