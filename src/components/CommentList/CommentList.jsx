import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(c => (
      <CommentInfo comment={c} key={c.id} />
    ))}
  </div>
);
