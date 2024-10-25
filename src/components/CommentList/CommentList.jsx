import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return comments && comments.length > 0 ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  ) : (
    <div>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </div>
  );
};
