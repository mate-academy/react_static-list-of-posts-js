import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      )}
    </div>
  );
};
