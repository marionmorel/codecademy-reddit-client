import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSubreddits = createAsyncThunk('subreddits', async () => {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
})

const sliceOptions = {
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        failedToLoad: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubreddits.pending, (state) => {
            state.isLoading = true;
            state.failedToLoad = false;
        })
            .addCase(getSubreddits.fulfilled, (state, action) => {
            state.isLoading = false;
            state.failedToLoad = false;
            state.subreddits = action.payload;
        })
        .addCase(getSubreddits.rejected, (state) => {
            state.isLoading = false;
            state.failedToLoad = true;
        })
    }
}

const subredditSlice = createSlice(sliceOptions);

export const selectSubreddits = (state) => state.subreddit.subreddits;
export const selectIsLoading = (state) => state.subreddit.isLoading;

export default subredditSlice.reducer;