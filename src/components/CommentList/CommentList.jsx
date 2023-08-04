import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  comments.length
    ? comments.map(comment => (
      <div className="CommentList">
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      </div>
    ))
    : <b data-cy="NoCommentsMessage">No comments yet</b>
);
