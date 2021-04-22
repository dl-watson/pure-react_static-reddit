import React from 'react';
import { PostList } from './list/PostList';
import { posts } from '../../data/reactjs';

const App = () => {
  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default App;
