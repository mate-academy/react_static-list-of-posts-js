import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(com => (
      <CommentInfo comment={com} key={com.id} />
    ))}
  </div>
);
