import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>
    <p>
      Posted by <UserInfo user={post.user} />
    </p>
    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments yet</p>
    )}
  </div>
);

export { PostInfo };
