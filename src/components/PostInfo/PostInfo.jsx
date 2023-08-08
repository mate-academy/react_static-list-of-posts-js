import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ info }) => {
  const { user, comments, title, body } = info;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
        <p className="PostInfo__body">
          {body}
        </p>

        <hr />

        <CommentList
          comments={comments}
        />
      </div>
    </div>
  );
};
