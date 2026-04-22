import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments = [] }) => {
  if (comments?.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <>
      {comments?.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </>
  );
};
