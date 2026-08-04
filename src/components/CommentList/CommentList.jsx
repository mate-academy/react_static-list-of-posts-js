import { CommentInfo } from "../CommentInfo";

export const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
