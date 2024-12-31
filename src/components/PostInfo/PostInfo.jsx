/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */


import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by '}
        {post.user && <UserInfo user={post.user} />}
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);

