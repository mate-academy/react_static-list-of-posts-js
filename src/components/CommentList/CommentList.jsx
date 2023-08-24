import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  comments.length > 0 ? (
    comments.map(comment => (
      <div className="CommentList">
        <CommentInfo comment={comment} key={comment.id} />
      </div>
    ))) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
  )
);
