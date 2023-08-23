import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export function CommentList({ comments }) {
  const hasComments = comments.length;

  return (
    <div className="CommentList">
      {hasComments ? (
        comments.map(comment => (
          <CommentInfo
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )
      }
    </div>
  );
}
