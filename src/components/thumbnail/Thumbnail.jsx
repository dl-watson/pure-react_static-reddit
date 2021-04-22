import React from 'react';
import styles from './styles/Thumbnail.css';

export const Thumbnail = ({ thumbnail }) => {
  return (
    <div className={styles.Thumbnail}>
      {thumbnail === 'self' ? (
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2FFringeBucket%2Fimage_placeholder.png&f=1&nofb=1"
          alt=""
        />
      ) : (
        <img src={thumbnail} alt="" />
      )}
    </div>
  );
};
