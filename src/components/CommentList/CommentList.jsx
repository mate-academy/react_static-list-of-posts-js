import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => {
        return <CommentInfo comment={comment} key={comment.id} />;
      })}
    </div>
  );
};
