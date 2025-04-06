import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      )}
    </div>
  );
};
