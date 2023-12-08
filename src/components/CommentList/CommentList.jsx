import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="commentList">
    {comments.map(comment => (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    ))}
  </div>
);
