import './CommentList.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    <li>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </li>
  </ul>

);
