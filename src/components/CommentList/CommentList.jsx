import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments = [] }) => (
  <div className="CommentList">
    {comments.length > 0 ? (
      comments.map(({ id, ...comment }) => (
        <CommentInfo key={id} comment={comment} />
      ))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
