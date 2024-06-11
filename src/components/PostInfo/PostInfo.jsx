import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post: { title, body, user, comments } }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    </div>
    <p className="PostInfo__body">{body}</p>
    {comments.length === 0 ? (
      <React.Fragment>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </React.Fragment>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
