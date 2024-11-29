import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return comments.map(comment => (
    <CommentInfo comment={comment} key={comment.id} />
  ));
};
