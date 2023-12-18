import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {(comments.length > 0)
      ? (
        comments.map(comment => <CommentInfo comment={comment} />)
      ) : (
        <b data-cy="NoCommentsMessage">
          No comments yet
        </b>
      )
    }
  </div>
);
