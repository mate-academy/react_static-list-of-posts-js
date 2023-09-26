import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

export const PostInfo = ({ post }) => {
  const { user, comments, title, body } = post;

  return (
    <div className="PostInfo">
      <UserInfo user={user} />
      <div className="PostInfo__title">{title}</div>
      <div className="PostInfo__body">{body}</div>
      <div className="PostInfo__comments">
        {comments.length > 0 ? (
          comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          ))
        ) : (
          <p data-cy="NoCommentsMessage">No comments available.</p>
        )}
      </div>
    </div>
  );
};
