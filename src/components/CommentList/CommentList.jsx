import { CommenInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommenInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
