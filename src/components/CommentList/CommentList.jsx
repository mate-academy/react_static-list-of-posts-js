import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(item => (
      <CommentInfo key={item.id} comment={item} />
    ))}
  </div>
);
