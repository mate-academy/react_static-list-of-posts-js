import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li>
        <CommentInfo comment={comment} key={comment.id} />
      </li>
    ))}
  </ul>
);
