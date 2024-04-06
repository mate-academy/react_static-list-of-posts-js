import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) =>
  comments.length > 0 ? (
    <div className="CommentList">
      {comments &&
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
    </div>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
