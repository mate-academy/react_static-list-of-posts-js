import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0 ? (
      // Тут .map() для виведення списку коментарів (якщо вони є) ️
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    ) : (
      // Тут повідомлення, якщо коментарів немає
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
