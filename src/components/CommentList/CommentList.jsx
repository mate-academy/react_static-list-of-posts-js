import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment = [] }) => (
  <div className="CommentList">
    {comment === [] ? null : <CommentInfo comment={comment} key={comment.id} />}
  </div>
);
