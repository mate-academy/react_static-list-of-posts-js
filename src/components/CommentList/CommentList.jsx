import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment }) => (
  <div className="CommentList">
    <CommentInfo comment={comment} />
  </div>
);
