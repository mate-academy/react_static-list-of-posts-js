import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  comments.length
    ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo comment={comment} />
        ))}
      </div>
    )
    : <b data-cy="NoCommentsMessage">No comments yet</b>
);
