import React from 'react';
import styles from './styles/PostDetails.css';

export const PostDetails = ({ post }) => {
  return (
    <div className={styles.PostDetails}>
      <div className={styles.top}>
        <div className={styles.title}>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
          <span className={styles.domain}>{post.domain}</span>
        </div>
      </div>
      <div className={styles.middle}>
        <span>
          submitted {formatDate(post.created)} by{'  '}
          <a
            href={`https://reddit.com/user/${post.author}`}
            target="_blank"
            className={styles.author}
          >
            {post.author}
          </a>
        </span>
      </div>
      <div className={styles.bottom}>
        <span>{post.num_comments} comments</span>
        <span>share</span>
        <span>save</span>
        <span>report</span>
        <span>pocket</span>
      </div>
    </div>
  );
};

const formatDate = (date) => {
  const format = new Date(date);
  const minutes = format.getMinutes();

  // cheating a bit, but the date format is fucky?
  return `${minutes} minutes ago`;
};
