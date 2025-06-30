import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) =>
  comments.length > 0 ? (
    <div className="CommentList">
      {comments.map(c => (
        <CommentInfo key={c.id} comment={c} />
      ))}
    </div>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
