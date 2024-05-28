import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments[0] === undefined ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    )}
  </div>
);
