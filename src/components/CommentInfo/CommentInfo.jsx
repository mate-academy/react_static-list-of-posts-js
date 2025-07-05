export const CommentInfo = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>
      <br />
      {' comment by '}
      <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
        {comment.email}
      </a>
    </div>
    <div className="CommentInfo__body">
      <em>{comment.body}</em>
    </div>
    <br />
  </div>
);
