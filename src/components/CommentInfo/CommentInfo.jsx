import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <h4 className="CommentInfo__name">{comment.name}</h4>
    <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);

CommentInfo.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
