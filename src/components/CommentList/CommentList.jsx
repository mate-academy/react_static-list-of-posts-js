import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  comments.length
    ? (
      <div className="CommentList">
        {comments.map(comment => (
          <CommentInfo
            comment={comment}
            key={comment.id}
          />
        ))}
      </div>
    )
    : (
      <p data-cy="NoCommentsMessage">
        No comments
      </p>
    )
);
