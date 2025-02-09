import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(e => (
      <CommentInfo comment={e} key={e.id} />
    ))}
  </div>
);
