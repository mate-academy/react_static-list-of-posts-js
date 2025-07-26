export const CommentInfo = ({ comment }) => (
  <li className="CommentInfo">
    <p className="CommentInfo__name">{comment.name}</p>
    <strong>{comment.email}</strong>: {comment.body}
  </li>
);
