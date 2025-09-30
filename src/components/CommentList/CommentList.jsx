import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';
import './CommentList.scss';

function CommentList({ comments }) {
  return (
    <div className="comments">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;