export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <p className="CommentInfo__name">{comment.name}</p>
    <p className="CommentInfo__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </p>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);
