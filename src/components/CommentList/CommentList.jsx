import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comment }) => {
  if (!comment || comment.length === 0) {
    return <div className="CommentList">No comments yet</div>;
  }

  return (
    <div className="CommentList">
      {comment.map(c => (
        <CommentInfo key={c.id} comment={c} />
      ))}
    </div>
  );
};
