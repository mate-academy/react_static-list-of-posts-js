import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) =>
  comments.length > 0 ? (
    <div className="CommentList">
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
