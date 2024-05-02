import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Post } from '../Post/Post';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { getPosts, updateSelectedSubreddit, selectIsLoading, selectPosts } from '../../features/reddit/redditSlice'

import "./PostList.css";

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);
    let { subreddit } = useParams();

    subreddit = subreddit === undefined ? 'r/home' : `r/${subreddit}`;

    useEffect(() => {
        dispatch(getPosts(subreddit));
        dispatch(updateSelectedSubreddit(subreddit));
    }, [dispatch, subreddit]);

    return (
        <main>
            {isLoading ? (
                <LoadingPage />
            ) : (
                posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            title={post.title}
                            author={post.author}
                            comments={post.num_comments}
                            url={post.url}
                            upvotes={post.ups}
                        />
                    )
                })
            )}
        </main>
    )
}