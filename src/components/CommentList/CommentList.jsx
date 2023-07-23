import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  (comments.length !== 0) ? (
    <ul className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </ul>
  ) : (
    <>
      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  )
);
