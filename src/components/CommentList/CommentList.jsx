import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  const hasComments = comments.length > 0;

  return !hasComments ? (
    <>
      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  ) : (
    <div className="CommentList">
      {comments.map(
        comment => <CommentInfo comment={comment} key={comment.id} />,
      )}
    </div>
  );
};
