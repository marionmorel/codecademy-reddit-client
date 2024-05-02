import { configureStore } from "@reduxjs/toolkit";

import redditSliceReducer from "../features/reddit/redditSlice";
import subredditsSliceReducer from "../features/subreddit/subredditSlice";

export default configureStore({
  reducer: {
    reddit: redditSliceReducer,
    subreddit: subredditsSliceReducer,
  },
})