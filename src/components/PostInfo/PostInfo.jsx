import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    {post.user && <UserInfo user={post.user} />}
    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <p data-cy="NoCommentsMessage">No comments yet.</p>
    )}
  </div>
);

export default PostInfo;
