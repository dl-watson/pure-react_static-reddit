import React from 'react';
import styles from './styles/Post.css';
import { PostDetails } from '../details/PostDetails';
import { Thumbnail } from '../thumbnail/Thumbnail';
import { Votes } from '../votes/Votes';

export const Post = ({ post }) => {
  return (
    <li className={styles.Post}>
      <Votes ups={post.ups} />
      <Thumbnail thumbnail={post.thumbnail} />
      <PostDetails post={post} />
    </li>
  );
};
