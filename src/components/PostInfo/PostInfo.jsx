import React from 'react';
import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{post.title}</h2>
      <div className="PostInfo_body">{post.body}</div>
      {post.user && <UserInfo user={post.user} />}
      {post.comments && post.comments.length !== 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
