import React from 'react';
// import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>
      <p>
        {' Posted by  '}
        <a className="UserInfo" href={`mailto:${post.user.name}`}>
          {post.user.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList comments={post.comments} />
  </div>
);
