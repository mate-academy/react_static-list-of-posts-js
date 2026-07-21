import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export function CommentList(props) {
  const { comments } = props;

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
