import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  if (!comments.length) {
    return (
      <div data-cy="NoCommentsMessage">
        No comments yet
      </div>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  );
};
