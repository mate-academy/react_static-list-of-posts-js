import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <>
    {comments.length ? (
      comments.map(comment => (
        <div className="CommentList" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))
    ) : (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </>
);
