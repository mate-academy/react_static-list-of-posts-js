export const CommentInfo = ({ comment }) => (
  <div>
    {comment && comment.length > 0 ? (
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{comment.name}</strong>
          {' by '}
          <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
            {comment.email}
          </a>
        </div>
        <div className="CommentInfo__body">{comment.body}</div>
      </div>
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
