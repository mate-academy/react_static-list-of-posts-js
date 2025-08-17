import React from 'react';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);
