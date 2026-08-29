import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return (
      <p className="CommentList__empty" data-cy="NoCommentsMessage">
        No comments yet
      </p>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};