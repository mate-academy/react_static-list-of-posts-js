import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return <p data-cy="NoCommentsMessage">No comments yet</p>;
  }

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
