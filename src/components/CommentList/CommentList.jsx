import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => {
        return <CommentInfo comment={comment} key={comment.id} />;
      })}
    </div>
  );
};
