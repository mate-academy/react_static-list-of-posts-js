import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {comments.length > 0 ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))}
      </div>
    ) : (
      <b data-cy="NoCommentsMessage"> No comments yet</b>
    )}
  </>
);
