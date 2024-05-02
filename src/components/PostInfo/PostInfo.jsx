import './PostInfo.scss';
import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ title, body, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      <p>
        {'Posted by '}
        <UserInfo {...user} />
      </p>
    </div>
    <p className="PostInfo__body">{body}</p>
    {comments.length ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
