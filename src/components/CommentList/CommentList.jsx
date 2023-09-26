import React from 'react';
import './CommentList.scss'; // Import the corresponding SCSS file
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {/* Map over comments and render CommentInfo components */}
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
