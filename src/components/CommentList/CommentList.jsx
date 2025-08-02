import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <div className="CommentList">
    {post.comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
