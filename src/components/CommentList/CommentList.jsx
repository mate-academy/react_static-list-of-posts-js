import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments, postId }) => (
  <div className="CommentList">
    {comments
      .filter(comment => comment.postId === postId)
      .map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
  </div>
);
