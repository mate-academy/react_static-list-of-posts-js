import React from 'react';
import comments from '../../api/comments.json';
import './CommentInfo.scss';

export const CommentInfo = ({ postId }) => {
  const commentsForPost = postId
    ? comments.filter(c => c.postId === postId)
    : comments;

  return (
    <div>
      {commentsForPost.map(comment => (
        <div key={comment.id}>{comment.body}</div>
      ))}
    </div>
  );
};
