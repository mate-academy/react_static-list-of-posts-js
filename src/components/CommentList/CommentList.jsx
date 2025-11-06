import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="CommentList">
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(c => (
        <CommentInfo key={c.id} comment={c} />
      ))}
    </div>
  );
};
