import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';
import './PostInfo.scss';

const PostInfo = ({ post, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by '}
        {user ? <UserInfo user={user} /> : 'Unknown User'}
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    {comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);

export default PostInfo;
