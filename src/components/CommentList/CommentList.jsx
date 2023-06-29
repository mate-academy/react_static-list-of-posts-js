import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    );
  }

  return (
    <div className="CommentList">
      {
      comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    }
    </div>
  );
};
