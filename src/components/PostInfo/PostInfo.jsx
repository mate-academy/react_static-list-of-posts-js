import React from 'react';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => {
  if (!post) {
    return <p>No post provided</p>;
  }

  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by '}
          <a className="UserInfo" href={`mailto:${user?.email || ''}`}>
            {user?.name || 'Unknown user'}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments?.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
