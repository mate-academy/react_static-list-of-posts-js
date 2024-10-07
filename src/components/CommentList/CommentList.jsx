import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment }) => (
  <div className="CommentList">
    {comment.map(content => (
      <CommentInfo content={content} key={content.id} />
    ))}
  </div>
);
