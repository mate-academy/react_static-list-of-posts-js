import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <>
      {comments.length === 0 && (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}

      {comments.length > 0 && (
        <div className="CommentList">
          {comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
};
