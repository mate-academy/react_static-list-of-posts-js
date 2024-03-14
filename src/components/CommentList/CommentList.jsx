import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div key={comments.id} className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
