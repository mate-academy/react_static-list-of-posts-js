import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <article className="post-info">
    <h2 className="PostInfo__title">{post.title}</h2>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    {post.comments.length === 0 ? (
      <div data-cy="NoCommentsMessage">No comments yet.</div>
    ) : (
      <CommentList comments={post.comments} />
    )}
  </article>
);
