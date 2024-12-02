import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <ul className="CommentList__items">
        {comments.map(comment => (
          <li key={comment.id} className="CommentList__item">
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    )}
  </div>
);
