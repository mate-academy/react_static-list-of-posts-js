import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return comments.map(comment => (
    <CommentInfo comment={comment} key={comment.id} />
  ));
};
