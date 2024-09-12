import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ commenstList }) => (
  <div className="CommentList">
    {commenstList.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
