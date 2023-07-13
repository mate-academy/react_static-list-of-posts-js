import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ commentsList }) => (
  <div className="CommentList">
    {commentsList.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
