import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  return comments.length !== 0 ? (
    <>
      <hr />
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
};
