import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </div>
  );
};
