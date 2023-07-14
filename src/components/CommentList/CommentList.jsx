import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <ul>
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      </ul>
    ))}
  </div>
);
