import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {/* eslint-disable-next-line max-len */}
    {comments.length > 0 ? (comments.map(comment => (<CommentInfo comment={comment} key={comment.id} />))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )
    }
  </div>
);
