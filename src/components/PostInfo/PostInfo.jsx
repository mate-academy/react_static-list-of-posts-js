import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  if (!post) {
    return null;
  }

  const postComments = post.comments || [];

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by '}
          <UserInfo user={post.user} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
