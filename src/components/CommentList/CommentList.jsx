import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) =>
  comments.map(comment => (
    <div key={comment.id} className="CommentList">
      <CommentInfo comment={comment} />
    </div>
  ));
