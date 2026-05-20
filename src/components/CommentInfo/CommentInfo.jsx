export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__name">{comment.name}</div>

    <div className="CommentInfo__body">{comment.body}</div>

    <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
  </div>
);
