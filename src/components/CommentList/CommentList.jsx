import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.length > 0 ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  ) : (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );
};
