import React from 'react';
import CommentList from '../CommentList/CommentList';
import '../PostInfo/PostInfo.scss';

function PostInfo({ post }) {
  return (
    <div className="post">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__body">{post.body}</p>

      <div className="post__user">By: {
      post.user?.name || 'Unknown author'
      }
      </div>
      <CommentList comments={post.comments || []} />
    </div>
  );
}

export default PostInfo;