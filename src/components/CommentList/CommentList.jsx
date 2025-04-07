import { CommentInfo } from '../CommentInfo';

export function CommentList({ comments }) {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
