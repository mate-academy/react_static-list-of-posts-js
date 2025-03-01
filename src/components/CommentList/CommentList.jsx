import './CommentList.scss'
import { CommentInfo } from '../CommentInfo'

export const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

