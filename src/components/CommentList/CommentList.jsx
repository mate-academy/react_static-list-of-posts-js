import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments, post }) => (
  <div className="CommentList">
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo
            comment={comment}
          />
        </li>
      ))}
    </ul>
  </div>
);
