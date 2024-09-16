import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </ul>
);
