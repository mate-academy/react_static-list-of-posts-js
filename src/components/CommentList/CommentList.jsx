import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comment }) => (
  <CommentInfo comment={comment} key={comment.id} />
);
