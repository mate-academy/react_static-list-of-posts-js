import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0 ? (
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    ) : (
      <p>No comments yet</p>
    )}
  </div>
);
