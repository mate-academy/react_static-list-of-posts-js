import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return comments.length > 0 ? (
    comments.map(comment => <CommentInfo key={comment.id} comment={comment} />)
  ) : (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );
};
