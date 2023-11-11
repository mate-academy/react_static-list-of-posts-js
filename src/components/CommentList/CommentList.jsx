import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
    {!comments.length && <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
