import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div className="CommentList">
      {comments.map(c => (
        <CommentInfo key={c.id} comment={c} />
      ))}
    </div>
  );
};
