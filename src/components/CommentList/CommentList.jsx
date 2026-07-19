import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  const commentsToRender = comments || [];

  if (commentsToRender.length === 0) {
    return (
      <div className="CommentList">
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    );
  }

  return (
    <div className="CommentList">
      {commentsToRender.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
