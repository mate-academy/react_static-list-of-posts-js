import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </>

);
