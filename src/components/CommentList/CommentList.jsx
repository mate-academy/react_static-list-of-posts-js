import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return comments.map(comment => (
    <div className="CommentList">
      <CommentInfo comment={comment} key={comment.id} />
    </div>
  ));
};
