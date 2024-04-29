import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) =>
  !comments.length ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
