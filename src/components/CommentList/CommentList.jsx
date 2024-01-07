import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  comments.length ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  ) : (
    <>
      <h4 data-cy="NoCommentsMessage">No comments yet</h4>
    </>
  )
);
