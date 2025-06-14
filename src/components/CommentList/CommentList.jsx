import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {Array.isArray(comments) &&
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
  </div>
);
