import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubreddits, selectSubreddits } from '../../features/subreddit/subredditSlice';

import { Subreddits } from '../Subreddits/Subreddit';

import '../Post/Post.css';

export const SubredditList = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);


    useEffect(() => {
        dispatch(getSubreddits());
    }, [dispatch])

    return (
        <aside>
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
        </aside>
    )
}
