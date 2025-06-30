import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.length > 0 ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  ) : (
    <div data-cy="NoCommentsMessage" className="CommentList">
      No comments
    </div>
  );
};
