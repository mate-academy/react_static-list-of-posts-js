import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {!comments.length
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
  </div>
);
