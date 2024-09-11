import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(({ id, ...comment }) => (
        <CommentInfo comment={comment} key={id} />
      ))}
    </div>
  );
};
