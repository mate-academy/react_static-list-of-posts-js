import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.length === 0 ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    comments.map(comment => <CommentInfo key={comment.id} comment={comment} />)
  );
};
