import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments && comments.length > 0 ? (
        comments.map(comment => {
          return <CommentInfo comment={comment} key={comment.id} />;
        })
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
