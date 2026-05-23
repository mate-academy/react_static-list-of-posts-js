import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments !== undefined && comments.length !== 0 ? (
      comments.map(c => <CommentInfo comment={c} key={c.id} />)
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
