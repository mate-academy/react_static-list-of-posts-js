import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment, index) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
