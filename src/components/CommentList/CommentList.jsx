import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments && comments.length > 0 ? (
      comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
