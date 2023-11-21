import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comment }) => (
  <div className="CommentInfo">
    <CommentInfo comment={comment} />
  </div>
);
