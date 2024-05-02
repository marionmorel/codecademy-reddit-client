import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { PostList } from '../components/PostList/PostList';
import { NotFound } from '../components/NotFound/NotFound';
import { Footer } from '../components/Footer/Footer';


import store from './store.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <Header />

      <Routes>
        <Route path={'/r/:subreddit'} element={<PostList />} />
        <Route path={'/'} element={<PostList />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>

      <Footer />

      </Provider>
    </div>
  );
}

export default App;
