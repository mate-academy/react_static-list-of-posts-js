import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ info }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{info.title}</h3>

      <UserInfo user={info.user} />
    </div>

    <p className="PostInfo__body">{info.body}</p>

    <hr />

    <CommentList list={info.comments} />
  </div>
);
