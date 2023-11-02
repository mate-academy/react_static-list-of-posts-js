import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (comments.length !== 0) {
    return (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }

  return (
    <>
      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );
};
