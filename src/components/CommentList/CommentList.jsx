import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

const MakeComments = comments =>
  comments.map(comment => <CommentInfo comment={comment} key={comment.id} />);

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length > 0 ? (
      MakeComments(comments)
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
