import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
          key={comment.id}
        />
      ))}
    </div>
  );
};
