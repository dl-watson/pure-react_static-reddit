import React, { useState } from 'react';
import styles from './styles/Votes.css';

export const Votes = ({ ups }) => {
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votes, setVotes] = useState(ups);

  const handleUpvote = ({ target }) => {
    if (!upvote && downvote) {
      setUpvote(true);
      setDownvote(false);
      setVotes(votes + 2);
    } else if (!upvote) {
      setUpvote(true);
      setDownvote(false);
      setVotes(votes + 1);
    } else {
      setUpvote(false);
      setVotes(votes - 1);
    }
  };

  const handleDownvote = ({ target }) => {
    if (!downvote && upvote) {
      setUpvote(false);
      setDownvote(true);
      setVotes(votes - 2);
    } else if (!downvote) {
      setUpvote(false);
      setDownvote(true);
      setVotes(votes - 1);
    } else {
      setDownvote(false);
      setVotes(votes + 1);
    }
  };

  return (
    <div className={styles.Votes}>
      {upvote ? (
        <img
          className={(styles.upvote, styles.selected)}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FF2ae3hB.png&f=1&nofb=1"
          alt="upvote"
          onClick={(e) => handleUpvote(e)}
        />
      ) : (
        <img
          className={styles.upvote}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FF2ae3hB.png&f=1&nofb=1"
          alt="upvote"
          onClick={(e) => handleUpvote(e)}
        />
      )}
      <span>{votes}</span>
      {downvote ? (
        <img
          className={(styles.downvote, styles.selected)}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ibb.co%2FThJGcGv%2FDownvote.png&f=1&nofb=1"
          alt="downvote"
          onClick={(e) => handleDownvote(e)}
        />
      ) : (
        <img
          className={styles.downvote}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ibb.co%2FThJGcGv%2FDownvote.png&f=1&nofb=1"
          alt="downvote"
          onClick={(e) => handleDownvote(e)}
        />
      )}
    </div>
  );
};
