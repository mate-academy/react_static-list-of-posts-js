import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <p data-cy="NoCommentsMessage">No comments yet.</p>
    ) : (
      comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    )}
  </div>
);
