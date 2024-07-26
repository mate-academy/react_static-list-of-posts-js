import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  if (!comments) {
    return null;
  }

  return (
    <>
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};
