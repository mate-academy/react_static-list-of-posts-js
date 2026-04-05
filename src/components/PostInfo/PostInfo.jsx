import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ info, post }) => {
  const data = info || post || {};
  const { title, body, user, comments } = data;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          {user && <UserInfo info={user} user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments && comments.length > 0 ? (
        <CommentList comments={comments} items={comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
