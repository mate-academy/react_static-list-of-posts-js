import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  if (comments && comments.length > 0) {
    return (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return <b data-cy="NoCommentsMessage">No comments yet</b>;
};
