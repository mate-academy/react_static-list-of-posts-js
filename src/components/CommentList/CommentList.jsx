import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return comments.length ? (
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
