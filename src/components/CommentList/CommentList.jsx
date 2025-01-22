import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments || !comments.length) {
    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>;
      </>
    );
  }

  return comments.map(comment => (
    <div className="CommentList" key={comment.id}>
      <CommentInfo comment={comment} />
    </div>
  ));
};
