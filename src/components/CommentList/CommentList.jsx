import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post }) => (
  <div className="CommentList">
    <CommentInfo comment={post.comment} />
  </div>
);
