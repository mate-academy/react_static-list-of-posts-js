import './CommentList.scss';
// eslint-disable-next-line import/no-cycle
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
