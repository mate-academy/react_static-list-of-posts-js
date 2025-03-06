import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
    </div>
  );
};
