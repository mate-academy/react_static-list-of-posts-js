import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </>
);

