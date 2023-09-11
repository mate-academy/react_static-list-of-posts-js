import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <ul className="CommentList__list">
      {comments.map(comment => (
        <li className="CommentList__item">
          <CommentInfo
            comment={comment}
            key={comment.id}
          />
        </li>
      ))}
    </ul>
  </div>
);
