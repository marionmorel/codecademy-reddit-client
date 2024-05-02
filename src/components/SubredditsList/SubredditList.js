import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubreddits, selectIsLoading, selectSubreddits } from '../../features/subreddit/subredditSlice';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { Subreddits } from '../Subreddits/Subreddit';

import './SubredditList.css';

export const SubredditList = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(getSubreddits());
    }, [dispatch])

    return (
        <aside>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <div className="post subreddit-post">
                    <h2>Subreddits</h2>
                    <ul className="subreddits-list">
                        {subreddits.map((subreddit, index) => {
                            return (
                                <Subreddits 
                                    key={index}
                                    name={subreddit.display_name_prefixed}
                                />
                            )
                        })}
                    </ul>
                </div>
            )}
        </aside>
    )
}
