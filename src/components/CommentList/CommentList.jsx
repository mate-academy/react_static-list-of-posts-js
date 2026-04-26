import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    )}
  </div>
);
