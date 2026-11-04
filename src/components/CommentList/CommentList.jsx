import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  const isComment = comments.length > 0;

  return isComment ? (
    <div className="CommentList">
      {comments.map(comment => {
        return <CommentInfo comment={comment} />;
      })}
    </div>
  ) : (
    <>
      <hr />
      <b data-cy="NoCommentsMessage">No comments yet</b>
    </>
  );
};
