import React from 'react';
import './Post.css';
import placeholder from './placeholder.png';
import upvote from './upvote.png';
import downvote from './downvote.png';
import comment from './comment.png';
import authorImg from './author-logo.svg';

export const Post = ({ title, url, author, comments, upvotes }) => {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-container">
                    <h3 className="post-title">{title ? title : "Post Title"}</h3>
                    <img
                        id="post-img" 
                        src={url ? url : placeholder} 
                        alt={title ? title : "Post Title"} 
                    />
                </div>
                <div className="post-infos">
                    <div className="post-author">
                        <img 
                            className="icon author-img"
                            src={authorImg}
                            alt="author"
                        />
                        <p>{author ? author : 'Post Author'}</p>
                    </div>
                    <div className="post-stats">
                        <div className="post-upvotes">
                            <img 
                                className="icon"
                                src={upvote} 
                                alt='upvote' 
                            />
                            <p>{upvotes ? upvotes : 0}</p>
                            <img 
                                className="icon"
                                src={downvote} 
                                alt='downvote' 
                            />
                        </div>
                        <div className="post-comments">
                            <img
                                className="icon" 
                                src={comment} 
                                alt='comments' 
                            />
                            <p>{comments ? comments : 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}