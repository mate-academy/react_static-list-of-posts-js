import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ commentsList }) => (
  <div className="CommentList">
    {commentsList.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
