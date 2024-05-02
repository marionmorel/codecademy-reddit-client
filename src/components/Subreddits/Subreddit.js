import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Subreddit.css';
import { selectSelectedSubreddit } from '../../features/reddit/redditSlice';

export const Subreddits = ({name}) => {
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    return (
        <div>
            <li className={selectedSubreddit === name ? 'selectedSubreddit' : false}>
                <button className="button" type="button">
                    <Link to={`/${name}`} id="link">
                        {name}
                    </Link>
                </button>
            </li>
        </div>
    )
}