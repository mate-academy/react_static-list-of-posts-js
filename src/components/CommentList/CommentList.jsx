import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment }) => {
  return (
    <>
      {comment.length > 0 ? (
        <div className="CommentList">
          {comment.map(post => {
            return <CommentInfo comment={post} />;
          })}
        </div>
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </>
  );
};
