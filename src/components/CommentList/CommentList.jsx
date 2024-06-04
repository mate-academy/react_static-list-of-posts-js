import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length !== 0
      ? comments.map(comment => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      : null}
  </div>
);
