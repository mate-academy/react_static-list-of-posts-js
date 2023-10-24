import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments.length) {
    return (<b data-cy="NoCommentsMessage">No comments yet</b>);
  }

  return (
    <>
      {comments.map(comment => (
        <CommentInfo comment={comment} />
      ))}
    </>
  );
};
