import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    )}
  </>
);
