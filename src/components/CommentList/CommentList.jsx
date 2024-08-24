import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="CommentList" data-cy="NoCommentsMessage">
        No comments available.
      </div>
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
