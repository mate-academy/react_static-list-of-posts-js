import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) =>
  comments.length > 0 ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </div>
  ) : (
    <p> no comments </p>
  );
