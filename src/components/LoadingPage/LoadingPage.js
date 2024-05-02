import React from 'react';
import loading from './loading.gif';
import './LoadingPage.css'

export const LoadingPage = () => {
    return (
        <div id="loading">
            <img 
                src={loading}
                alt="loading"
            />
            <h2>Loading</h2>
            <p>Please wait.</p>
        </div>
    )
}