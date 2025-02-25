import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <section className="Comment__List">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </section>
);
