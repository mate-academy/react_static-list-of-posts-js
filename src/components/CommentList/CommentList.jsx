import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div>
    {comments.length ? (
      comments.map(comment => (
        <div className="CommentList">
          <CommentInfo comment={comment} />
        </div>
      ))
    ) : (
      <strong data-cy="NoCommentsMessage">No comments yet</strong>
    )}
  </div>
);
