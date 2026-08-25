import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  if (!comments.length) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <div className="CommentInfo" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  );
};
