import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo" key={post.id}>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <UserInfo user={post.user} />
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />
      <CommentList comments={post.comments || []} />
    </div>
  );
};
