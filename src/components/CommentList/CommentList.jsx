import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  !comments.length ? (
    <b data-cy="NoCommentsMessage">
      No comments yet
    </b>
  ) : (
    <div className="CommentList">
      {
        comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      }
    </div>
  )
);
