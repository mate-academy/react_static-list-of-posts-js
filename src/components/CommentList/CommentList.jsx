import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <ul>
      {comments.map(comment => (
        <li>
          <CommentInfo comment={comment} key={comment.id} />
        </li>
      ))}
    </ul>
  </div>
);
