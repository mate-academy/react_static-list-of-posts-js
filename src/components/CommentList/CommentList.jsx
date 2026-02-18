import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) =>
  comments.length > 0 ? (
    comments.map(comment => <CommentInfo key={comment.id} comment={comment} />)
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
