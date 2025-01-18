import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ postComments }) => (
  <div className="CommentList">
    {postComments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
