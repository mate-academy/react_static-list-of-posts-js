import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        comments.map(comment => {
          return <CommentInfo key={comment.id} comment={comment} />;
        })
      )}
    </div>
  );
};
