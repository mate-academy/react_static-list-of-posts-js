import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export function PostInfo({ post }) {
  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h2 className="PostInfo__title">{post.title}</h2>
        <p className="PostInfo__body">{post.body}</p>
        <UserInfo user={post.user} />
      </div>

      {post.comments.length > 0 ? (
        <CommentList comments={post.comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments</div>
      )}
    </article>
  );
}

export default PostInfo;
