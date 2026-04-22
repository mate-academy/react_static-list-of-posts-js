import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ postComments }) =>
  postComments?.length === 0 ? (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  ) : (
    postComments.map(comment => {
      return <CommentInfo key={comment.id} comment={comment} />;
    })
  );
