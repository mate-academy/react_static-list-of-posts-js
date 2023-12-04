import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <ul>
      {comments.map(comment => (
        <li key={comments.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </div>
);
