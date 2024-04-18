import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) =>
  comments.length === 0 ? (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  ) : (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
