export const CommentInfo = ({comment}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__name">{comment.name}</div>
    <a href={`mailto:${comment.email}`} className="CommentInfo__email">
      {comment.email}
    </a>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);