export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__name">{comment.name}</div>
    <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
