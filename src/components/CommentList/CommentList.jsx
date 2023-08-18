import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment }) => (
  <div className="CommentList">
    <hr />
    <CommentInfo comment={comment} />
  </div>
);
