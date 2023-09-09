import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo
        name={comment.name}
        email={comment.email}
        body={comment.body}
        key={comment.id}
      />
    ))}
  </div>
);
