import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ commentList }) => (
  <div className="CommentList">
    {commentList.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
