import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <p className="CommentList__no-comments" data-cy="NoCommentsMessage">
        No comments yet
      </p>
    ) : (
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    )}
  </div>
);
