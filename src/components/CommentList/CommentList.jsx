import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments ? (
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
