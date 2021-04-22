import React from 'react';
import { Post } from '../post/Post';
import uuid from 'react-uuid';

export const PostList = ({ posts }) => {
  return posts
    .sort((a, b) => a.data.ups - b.data.ups)
    .reverse()
    .map((post) => {
      return (
        <ul key={uuid()}>
          <Post post={post.data} />
        </ul>
      );
    });
};
