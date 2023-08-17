import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  comments.length ? (
    <ul className="CommentList">
      {comments.map(comment => (
        <CommentInfo
          comment={comment}
          key={comment.id}
        />
      ))}
    </ul>
  ) : (
    <p data-cy="NoCommentsMessage">No comments yet</p>
  )
);
