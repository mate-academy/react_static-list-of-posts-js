import React from 'react';
import PropTypes from 'prop-types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const PostInfo = ({ post }) => {
  const { title, user, comments } = post;

  return (
    <div className="PostInfo">
      <h1 className="PostInfo__title">{title}</h1>

      <UserInfo user={user} />

      {comments.length > 0 ? (
        <div className="PostInfo__comments">
          {comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      )}
    </div>
  );
};

PostInfo.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
