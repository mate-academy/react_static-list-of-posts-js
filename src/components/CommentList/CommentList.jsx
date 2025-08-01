import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = comments => {
  return (
    <div className="CommentList">
      {comments.comments.map(comment => (
        <div>
          {' by '}
          <CommentInfo comment={comment} />
          <div className="CommentInfo__body">{comment.body}</div>
        </div>
      ))}
    </div>
  );
};
