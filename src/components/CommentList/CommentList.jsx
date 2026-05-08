import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  const NoCommentsMessage = (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );

  if (comments.length === 0) {
    return NoCommentsMessage;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
