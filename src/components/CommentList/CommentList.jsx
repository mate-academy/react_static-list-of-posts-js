import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(c => (
      <CommentInfo key={c.id} comment={c} />
    ))}
  </div>
);
