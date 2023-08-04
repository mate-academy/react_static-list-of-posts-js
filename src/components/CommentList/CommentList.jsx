import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  comments.length
    ? comments.map(comment => (
      <div className="CommentList" key={comment.id}>
        <CommentInfo
          comment={comment}
        />
      </div>
    ))
    : <b data-cy="NoCommentsMessage">No comments yet</b>
);
