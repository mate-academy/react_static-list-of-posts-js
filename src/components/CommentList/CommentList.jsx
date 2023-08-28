import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comment = [] }) => (
  <div className="CommentList">
    {comment.map(com => (
      com === [] ? null : <CommentInfo com={com} key={com.id} />
    ))}
  </div>
);
