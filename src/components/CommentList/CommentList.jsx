import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </>
  );
};
